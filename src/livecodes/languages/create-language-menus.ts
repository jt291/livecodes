import type { createEventsManager } from '../events';
import type { EditorId, Config, Language, Processor, LanguageSpecs, Template } from '../models';
import { languages } from './languages';
import { processors } from './processors';
import { languageIsEnabled, processorIsEnabled } from './utils';

export const createLanguageMenus = (
  config: Config,
  baseUrl: string,
  eventsManager: ReturnType<typeof createEventsManager>,
  showLanguageInfo: (languageInfo: HTMLElement) => void,
  loadStarterTemplate: (templateName: Template['name']) => void,
  importCode: (options: { url: string }) => Promise<boolean>,
) => {
  const editorIds: EditorId[] = ['markup', 'style', 'script'];
  const rootList = document.createElement('ul');
  document.querySelector('#select-editor')?.appendChild(rootList);

  let editorsNumber = editorIds.length;

  editorIds.forEach((editorId) => {
    const editorSelector = document.createElement('li');
    editorSelector.id = editorId + '-selector';
    editorSelector.classList.add('editor-title', 'noselect');
    editorSelector.dataset.editor = editorId;
    editorSelector.tabIndex = 1;
    editorSelector.innerHTML = `
      <span></span>
      <a
        href="javascript:void(0)"
        onclick="event.stopPropagation();"
        tabIndex="1"
        class="language-menu-button hint--bottom"
        data-hint="${window.deps.translateString('core.changeLanguage.hint', 'Change Language')}"
      >
      <i class="icon-arrow-down"></i>
      </a>
    `;
    rootList.appendChild(editorSelector);

    const menuScroller = document.createElement('div');
    menuScroller.classList.add('menu-scroller');
    menuScroller.classList.add('menu-scroller-' + editorId);
    editorSelector.appendChild(menuScroller);

    const languageMenu = document.createElement('ul');
    languageMenu.classList.add('dropdown-menu');
    languageMenu.classList.add('dropdown-menu-' + editorId);
    menuScroller.appendChild(languageMenu);

    const editorLanguages = [...languages]
      .filter((language) => language.editor === editorId)
      .filter((language) => languageIsEnabled(language.name, config));

    if (editorLanguages.length === 0) {
      editorSelector.classList.add('hidden');
      editorsNumber -= 1;
    } else if (editorLanguages.length === 1) {
      const changeLanguageButton =
        editorSelector.querySelector<HTMLElement>('.language-menu-button');
      if (changeLanguageButton) {
        changeLanguageButton.style.display = 'none';
      }
    }

    const enabledProcessors = processors.filter(
      (p) => p.editor === editorId && processorIsEnabled(p.name, config),
    );
    const processorsHeader =
      enabledProcessors.length > 0
        ? {
            name: editorId + '-processors',
            title: 'Processors:',
            longTitle: 'Processors:',
            editor: editorId,
          }
        : undefined;

    if (processorsHeader) {
      editorLanguages.push(processorsHeader as LanguageSpecs);
    }

    editorLanguages.forEach((language) => {
      const languageItem = document.createElement('li');
      languageItem.classList.add('language-item');
      languageMenu.appendChild(languageItem);

      const languageLink = document.createElement('a');
      languageLink.href = '#';
      languageLink.dataset.editor = editorId;
      languageLink.dataset.lang = language.name;
      languageLink.title = language.longTitle || language.title;
      languageLink.innerHTML = language.longTitle || language.title;

      if (!('extensions' in language)) {
        languageLink.classList.add('subtitle');
      }
      if (language.name === ('style-processors' as any)) {
        languageItem.classList.add('column-break');
      }
      languageItem.appendChild(languageLink);

      if (language.info !== false) {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip', 'hint--left');
        tooltip.dataset.hint = window.deps.translateString(
          'generic.clickForInfo',
          'Click for info...',
        );
        tooltip.innerHTML = infoIcon;

        eventsManager.addEventListener(
          tooltip,
          'mousedown',
          async () => {
            const languageInfo = document.createElement('div');
            languageInfo.classList.add('language-info');
            languageInfo.innerHTML = await getLanguageInfo(language.name, baseUrl);
            showLanguageInfo(languageInfo);
            const templateLink: HTMLElement | null = languageInfo.querySelector('a[data-template]');
            const templateName = templateLink?.dataset.template as Template['name'];
            if (templateLink && templateName) {
              eventsManager.addEventListener(
                templateLink,
                'click',
                async (event) => {
                  event.preventDefault();
                  loadStarterTemplate(templateName);
                },
                false,
              );
            }
            const codeLink: HTMLElement | null = languageInfo.querySelector('a[data-code]');
            const codeUrl = codeLink?.dataset.code;
            if (codeLink && codeUrl) {
              eventsManager.addEventListener(
                codeLink,
                'click',
                async (event) => {
                  event.preventDefault();
                  importCode({ url: codeUrl });
                },
                false,
              );
            }
          },
          false,
        );
        languageItem.appendChild(tooltip);
      }
    });
  });

  if (editorsNumber < 3) {
    document.querySelectorAll('.editor-title').forEach((editorSelector) => {
      editorSelector.classList.add('half-width');
    });
  }
};

export const createProcessorItem = (processor: { name: string; title: string }) => {
  const processorItem = document.createElement('li');
  processorItem.classList.add('language-item', 'processor-item');
  processorItem.innerHTML = `
        <label class="switch">
          <span>${processor.title}</span>
          <div>
            <input id="${processor.name}" type="checkbox" data-processor="${processor.name}" />
            <span class="slider round"></span>
          </div>
        </label>
        `;
  return processorItem;
};

const getLanguageInfo = async (language: Language | Processor, baseUrl: string) => {
  const languageInfoHTML = await import(baseUrl + '{{hash:language-info.js}}').then(
    (mod) => mod.languageInfo,
  );
  const domParser = new DOMParser();
  const dom = domParser.parseFromString(languageInfoHTML, 'text/html');
  const info = dom.querySelector(`[data-lang="${language}"]`);
  return info?.innerHTML || '';
};

const infoIcon = '<i class="icon-info"></i>';
