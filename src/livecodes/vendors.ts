// eslint-disable-next-line import/no-internal-modules
import { modulesService } from './services/modules';

const { getUrl, getModuleUrl } = modulesService;

export const vendorsBaseUrl = // 'http://127.0.0.1:8081/';
  /* @__PURE__ */ getUrl('@live-codes/browser-compilers@0.8.0/dist/');

export const acornUrl = /* @__PURE__ */ getUrl('acorn@8.8.2/dist/acorn.js');

export const artTemplateUrl = /* @__PURE__ */ getUrl('art-template@4.13.2/lib/template-web.js');

export const asciidocUrl = /* @__PURE__ */ getUrl(
  '@asciidoctor/core@2.2.6/dist/browser/asciidoctor.js',
);

export const assemblyscriptLoaderUrl = /* @__PURE__ */ getUrl(
  '@assemblyscript/loader@0.27.5/umd/index.js',
);

export const astringUrl = /* @__PURE__ */ getUrl('astring@1.8.1/dist/astring.min.js');

export const astroBaseUrl = /* @__PURE__ */ getUrl('@hatemhosny/astro-internal@0.0.4/');

export const astroWasmURL = /* @__PURE__ */ getUrl('@astrojs/compiler@0.9.2/astro.wasm');

export const autoCompleteUrl = /* @__PURE__ */ getUrl(
  '@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.js',
);

export const babelUrl = /* @__PURE__ */ getUrl('@babel/standalone@7.22.4/babel.js');

export const biwaschemeUrl = /* @__PURE__ */ getUrl('biwascheme@0.8.0/release/biwascheme.js');

export const blocklyCdnBaseUrl = /* @__PURE__ */ getUrl('blockly@9.3.3/');

export const browserJestUrl = /* @__PURE__ */ getUrl(
  '@live-codes/browser-jest@0.0.3/dist/browser-jest.umd.js',
);

export const brythonBaseUrl = /* @__PURE__ */ getUrl('brython@3.11.2/');

export const chaiUrl = /* @__PURE__ */ getModuleUrl('chai@4.3.6');

export const chaiTypesUrl = /* @__PURE__ */ getUrl('@types/chai@4.2.22/index.d.ts');

export const cherryCljsBaseUrl = /* @__PURE__ */ getUrl('cherry-cljs@0.0.4/');

export const cjs2esUrl = /* @__PURE__ */ getUrl('cjs2es@1.1.1/dist/cjs2es.browser.js');

export const clioBaseUrl = /* @__PURE__ */ getUrl(
  '@live-codes/clio-browser-compiler@0.0.3/public/build/',
);

export const coffeeScriptUrl = /* @__PURE__ */ getUrl(
  'coffeescript@2.7.0/lib/coffeescript-browser-compiler-legacy/coffeescript.js',
);

export const cppWasmBaseUrl = /* @__PURE__ */ getUrl('@chriskoch/cpp-wasm@1.0.2/');

export const csstreeUrl = /* @__PURE__ */ getUrl('css-tree@1.1.3/dist/csstree.js');

export const cytoscapeSvgUrl = /* @__PURE__ */ getUrl('cytoscape-svg@0.4.0/cytoscape-svg.js');

export const cytoscapeUrl = /* @__PURE__ */ getUrl('cytoscape@3.25.0/dist/cytoscape.min.js');

export const dotUrl = /* @__PURE__ */ getUrl('dot@1.1.3/doT.js');

export const ejsUrl = /* @__PURE__ */ getUrl('ejs@3.1.9/ejs.js');

export const elkjsBaseUrl = /* @__PURE__ */ getUrl('elkjs@0.8.2/lib/');

export const emmetMonacoUrl = /* @__PURE__ */ getUrl('emmet-monaco-es@5.0.0/dist/emmet-monaco.js');

export const esModuleShimsPath = 'es-module-shims@1.4.4/dist/es-module-shims.js';

export const etaUrl = /* @__PURE__ */ getUrl('eta@2.2.0/dist/eta.umd.js');

export const flexSearchUrl = /* @__PURE__ */ getUrl('flexsearch@0.7.21/dist/flexsearch.bundle.js');

export const fontAnonymousProUrl = /* @__PURE__ */ getUrl(
  '@fontsource/anonymous-pro@4.5.9/index.css',
);

export const fontCascadiaCodeUrl = /* @__PURE__ */ getUrl(
  '@fontsource/cascadia-code@4.2.1/index.css',
);

export const fontCodeNewRomanUrl = /* @__PURE__ */ getUrl(
  'https://fonts.cdnfonts.com/css/code-new-roman-2',
);

export const fontComicMonoUrl = /* @__PURE__ */ getUrl('comic-mono@0.0.1/index.css');

export const fontCourierPrimeUrl = /* @__PURE__ */ getUrl(
  '@fontsource/courier-prime@4.5.9/index.css',
);

export const fontDECTerminalModernUrl = /* @__PURE__ */ getUrl(
  'https://fonts.cdnfonts.com/css/dec-terminal-modern',
);

export const fontDejaVuMonoUrl = /* @__PURE__ */ getUrl('@fontsource/dejavu-mono@4.5.4/index.css');

export const fontFantasqueUrl = /* @__PURE__ */ getUrl(
  '@typopro/web-fantasque-sans-mono@3.7.5/TypoPRO-FantasqueSansMono.css',
);

export const fontFiraCodeUrl = /* @__PURE__ */ getUrl('firacode@6.2.0/distr/fira_code.css');

export const fontFixedsysUrl = /* @__PURE__ */ getUrl('https://fonts.cdnfonts.com/css/fixedsys-62');

export const fontHackUrl = /* @__PURE__ */ getUrl('hack-font@3.3.0/build/web/hack.css');

export const fontHermitUrl = /* @__PURE__ */ getUrl('typeface-hermit@0.0.44/index.css');

export const fontIBMPlexMonoUrl = /* @__PURE__ */ getUrl(
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap',
);

export const fontInconsolataUrl = /* @__PURE__ */ getUrl(
  'https://fonts.googleapis.com/css2?family=Inconsolata&display=swap',
);

export const fontIosevkaUrl = /* @__PURE__ */ getUrl('@fontsource/iosevka@4.5.4/index.css');

export const fontJetbrainsMonoUrl = /* @__PURE__ */ getUrl(
  '@fontsource/jetbrains-mono@4.5.11/index.css',
);

export const fontMenloUrl = /* @__PURE__ */ getUrl('https://fonts.cdnfonts.com/css/menlo');

export const fontMonofurUrl = /* @__PURE__ */ getUrl('https://fonts.cdnfonts.com/css/monofur');

export const fontMonoidUrl = /* @__PURE__ */ getUrl('@typopro/web-monoid@3.7.5/TypoPRO-Monoid.css');

export const fontNotoUrl = /* @__PURE__ */ getUrl(
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap',
);

export const fontNovaMonoUrl = /* @__PURE__ */ getUrl(
  'https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap',
);

export const fontOpenDyslexicUrl = /* @__PURE__ */ getUrl(
  '@fontsource/opendyslexic@4.5.4/index.css',
);

export const fontProFontWindowsUrl = /* @__PURE__ */ getUrl(
  'https://fonts.cdnfonts.com/css/profontwindows',
);

export const fontRobotoMonoUrl = /* @__PURE__ */ getUrl('@fontsource/roboto-mono@4.5.8/index.css');

export const fontSFMonoUrl = /* @__PURE__ */ getUrl('https://fonts.cdnfonts.com/css/sf-mono');

export const fontSourceCodeProUrl = /* @__PURE__ */ getUrl(
  '@fontsource/source-code-pro@4.5.12/index.css',
);

export const fontSpaceMonoUrl = /* @__PURE__ */ getUrl('@fontsource/space-mono@4.5.10/index.css');

export const fontSudoVarUrl = /* @__PURE__ */ getUrl('https://fonts.cdnfonts.com/css/sudo-var');

export const fontUbuntuMonoUrl = /* @__PURE__ */ getUrl('@fontsource/ubuntu-mono@4.5.11/index.css');

export const fontVictorMonoUrl = /* @__PURE__ */ getUrl('victormono@1.5.4/dist/index.css');

export const fscreenUrl = /* @__PURE__ */ getUrl('fscreen@1.2.0/dist/fscreen.esm.js');

export const githubMarkdownCss = /* @__PURE__ */ getUrl(
  'github-markdown-css@5.1.0/github-markdown.css',
);

export const go2jsBaseUrl = /* @__PURE__ */ getUrl('@live-codes/go2js@0.4.0/build/');

export const graphreCdnUrl = /* @__PURE__ */ getUrl('graphre@0.1.3/dist/graphre.js');

export const handlebarsBaseUrl = /* @__PURE__ */ getUrl('handlebars@4.7.7/dist/');

export const highlightjsUrl = /* @__PURE__ */ getModuleUrl('highlight.js@11.5.1');

export const hintCssUrl = /* @__PURE__ */ getUrl('hint.css@2.7.0/hint.min.css');

export const hpccJsCdnUrl = /* @__PURE__ */ getUrl('@hpcc-js/wasm@2.13.0/dist/index.js');

export const imbaBaseUrl = /* @__PURE__ */ getUrl('imba@2.0.0-alpha.229/dist/');

export const jestTypesUrl = /* @__PURE__ */ getUrl('@types/jest@27.4.1/index.d.ts');

export const jsclUrl = /* @__PURE__ */ getUrl(
  'gh:jscl-project/jscl-project.github.io@efd3aecdba496d132ed650b7b5be976fd0ca278f/jscl.js',
);

export const jsZipUrl = /* @__PURE__ */ getUrl('jszip@3.10.1/dist/jszip.js');

export const juliaWasmBaseUrl = /* @__PURE__ */ getUrl('@chriskoch/julia-wasm@1.0.4');

export const liquidJsUrl = /* @__PURE__ */ getUrl('liquidjs@10.8.2/dist/liquid.browser.min.js');

export const localforageUrl = /* @__PURE__ */ getUrl('localforage@1.10.0/dist/localforage.js');

export const luaUrl = /* @__PURE__ */ getUrl('fengari-web@0.1.4/dist/fengari-web.js');

export const lunaConsoleStylesUrl = /* @__PURE__ */ getUrl('luna-console@1.3.3/luna-console.css');

export const lunaDataGridStylesUrl = /* @__PURE__ */ getUrl(
  'luna-data-grid@0.5.1/luna-data-grid.css',
);

export const lunaDomViewerStylesUrl = /* @__PURE__ */ getUrl(
  'luna-dom-viewer@1.2.4/luna-dom-viewer.css',
);

export const lunaObjViewerStylesUrl = /* @__PURE__ */ getUrl(
  'luna-object-viewer@0.2.4/luna-object-viewer.css',
);

export const malinaVersion = '0.6.64';
export const malinaUrl = /* @__PURE__ */ getUrl(`malinajs@${malinaVersion}/malina.js`);

export const markedUrl = /* @__PURE__ */ getUrl('marked@5.0.4/marked.min.js');

export const mermaidCdnUrl = /* @__PURE__ */ getUrl('mermaid@10.2.2/dist/mermaid.esm.mjs');

export const mjmlUrl = /* @__PURE__ */ getUrl('mjml-browser@4.14.1/lib/index.js');

export const monacoEmacsUrl = /* @__PURE__ */ getUrl('monaco-emacs@0.3.0/dist/monaco-emacs.js');

export const monacoVimUrl = /* @__PURE__ */ getUrl('monaco-vim@0.4.0/dist/monaco-vim.js');

export const mustacheUrl = /* @__PURE__ */ getUrl('mustache@4.2.0/mustache.js');

export const nomnomlCdnUrl = /* @__PURE__ */ getUrl('nomnoml@1.6.1/dist/nomnoml.js');

export const normalizeCssUrl = /* @__PURE__ */ getUrl('normalize.css@8.0.1/normalize.css');

export const nunjucksBaseUrl = /* @__PURE__ */ getUrl('nunjucks@3.2.4/browser/');

export const opalBaseUrl = /* @__PURE__ */ getUrl('https://cdn.opalrb.com/opal/1.7.3/');

export const parinferUrl = /* @__PURE__ */ getUrl('parinfer@3.13.1/parinfer.js');

export const pintoraUrl = /* @__PURE__ */ getUrl(
  '@pintora/standalone@0.6.2/lib/pintora-standalone.umd.js',
);

export const plotlyCdnUrl = /* @__PURE__ */ getUrl('plotly.js@2.23.2/dist/plotly.js');

export const postcssImportUrlUrl = /* @__PURE__ */ getUrl(
  '@live-codes/postcss-import-url@0.1.2/dist/postcss-import-url.js',
);

export const prettierBaseUrl = /* @__PURE__ */ getUrl('prettier@3.0.0/');

export const prettierPhpUrl = /* @__PURE__ */ getUrl('@prettier/plugin-php@0.19.6/standalone.js');

export const prismBaseUrl = /* @__PURE__ */ getUrl('prismjs@1.26.0/components/');

export const pyodideBaseUrl = /* @__PURE__ */ getUrl(
  'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/',
);

export const qrcodeUrl = /* @__PURE__ */ getUrl('qrcode-generator@1.4.4/qrcode.js');

export const quillEditorCdnBaseUrl = /* @__PURE__ */ getUrl('quill@2.0.0-dev.4/dist/');

export const quillHtmlEditUrl = /* @__PURE__ */ getUrl(
  'quill-html-edit-button@2.2.7/dist/quill.htmlEditButton.min.js',
);

export const quillBlotFormaterUrl = /* @__PURE__ */ getUrl(
  'quill-blot-formatter@1.0.5/dist/quill-blot-formatter.min.js',
);

export const quillBetterTableBaseUrl = /* @__PURE__ */ getUrl('quill-better-table@1.2.10/dist/');

export const requireUrl = /* @__PURE__ */ getUrl('requirejs@2.3.6/require.js');

export const reasonCompilerUrl = /* @__PURE__ */ getUrl(
  'https://cdn.rescript-lang.org/v9.1.2/compiler.js',
);

export const reasonReactUrl = /* @__PURE__ */ getUrl(
  'https://cdn.rescript-lang.org/v9.1.2/%40rescript/react/cmij.js',
);

export const reasonStdLibBaseUrl = /* @__PURE__ */ getUrl('@rescript/std@9.1.3/lib/es6/');

export const rescriptCompilerUrl = /* @__PURE__ */ getUrl(
  'https://cdn.rescript-lang.org/v10.1.2/compiler.js',
);

export const rescriptReactUrl = /* @__PURE__ */ getUrl(
  'https://cdn.rescript-lang.org/v10.1.2/%40rescript/react/cmij.js',
);

export const rescriptStdLibBaseUrl = /* @__PURE__ */ getUrl('@rescript/std@10.1.2/lib/es6/');

export const resetCssUrl = /* @__PURE__ */ getUrl('reset-css@5.0.1/reset.css');

export const riotBaseUrl = /* @__PURE__ */ getUrl('riot@7.1.0/');

export const snackbarUrl = /* @__PURE__ */ getUrl('@snackbar/core@1.7.0/dist/snackbar.css');

export const spacingJsUrl = /* @__PURE__ */ getUrl('spacingjs@1.0.7/dist/bundle.js');

export const sqlFormatterUrl = /* @__PURE__ */ getUrl(
  'sql-formatter@12.2.1/dist/sql-formatter.min.js',
);

export const sqljsBaseUrl = /* @__PURE__ */ getUrl('sql.js@1.8.0/dist/');

export const stencilUrl = /* @__PURE__ */ getUrl('@stencil/core@3.2.2/compiler/stencil.js');

export const stylisUrl = /* @__PURE__ */ getUrl('stylis@4.2.0/dist/umd/stylis.js');

export const svelteRuntimeBaseUrl = /* @__PURE__ */ getUrl(
  'https://unpkg.com/svelte@4.0.0/src/runtime/internal/',
);

export const svgbobWasmCdnUrl = /* @__PURE__ */ getUrl('svgbob-wasm@0.4.1-a0/svgbob_wasm_bg.wasm');

export const tagifyBaseUrl = /* @__PURE__ */ getUrl('@yaireo/tagify@4.9.6/dist/');

export const tailwindcssUrl = /* @__PURE__ */ getUrl(
  '@mhsdesign/jit-browser-tailwindcss@0.3.0/dist/cdn.min.js',
);

export const tauPrologBaseUrl = /* @__PURE__ */ getUrl('tau-prolog@0.3.4/modules/');

export const tealUrl = /* @__PURE__ */ getUrl(
  'gh:teal-language/tl@d2fc36b5ff9a52d7265e63eb74cce70fd1cdbcb2/tl.lua',
);

export const twigUrl = /* @__PURE__ */ getUrl('twig@1.16.0/twig.min.js');

export const typescriptUrl = /* @__PURE__ */ getUrl('typescript@5.1.3/lib/typescript.js');

export const uniterUrl = /* @__PURE__ */ getUrl('uniter@2.18.0/dist/uniter.js');

export const vegaCdnUrl = /* @__PURE__ */ getUrl('vega@5.25.0/build/vega.js');

export const vegaLiteCdnUrl = /* @__PURE__ */ getUrl('vega-lite@5.9.3/build/vega-lite.js');

export const vue3CdnUrl = /* @__PURE__ */ getUrl('vue@3');

export const vue2CdnUrl = /* @__PURE__ */ getUrl('vue@2');

export const vueRuntimeUrl = /* @__PURE__ */ getUrl(
  'vue@3.3.4/dist/vue.runtime.esm-browser.prod.js',
);

export const vueSDKUrl = /* @__PURE__ */ getUrl(`livecodes@${process.env.SDK_VERSION}/vue.js`);

export const vueSfcLoaderCdnBaseUrl = /* @__PURE__ */ getUrl('vue3-sfc-loader@0.8.4/dist/');

export const wabtjsUrl = /* @__PURE__ */ getUrl('wabt@1.0.32/index.js');

export const waveDromBaseUrl = /* @__PURE__ */ getUrl('wavedrom@3.2.0/');

export const webRBaseUrl = /* @__PURE__ */ getUrl('@r-wasm/webr@0.1.1/dist/');
