import { Template } from '../models';

export const schemeStarter: Template = {
  title: 'Scheme Starter',
  thumbnail: 'assets/templates/scheme.svg',
  language: 'scheme',
  markup: {
    language: 'html',
    content: `
<div id="root">
  <h1>Hello, <sapn id="title">World</sapn>!</h1>
  <img src="/localpen/assets/templates/scheme.svg" class="logo" />
  <p>You clicked <span id="counter">0</span> times.</p>
  <button id="counter-button">Click me</button>
</div>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
#root,
#root button {
  text-align: center;
  font: 1em sans-serif;
}
.logo {
  width: 150px;
}
`.trimStart(),
  },
  script: {
    language: 'scheme',
    content: `
(let ((title "Scheme"))
  (set-content! "#title" title))

(let ((counter 0))
  (add-handler! "#counter-button" "click"
    (lambda (ev)
      (set! counter (+ counter 1))
      (set-content! "#counter" (number->string counter)))))

; check console
(let ((time-now (date-hour (current-date))))
  (console-log
    (cond ((< time-now 12) "Good morning")
          ((< time-now 18) "Good afternoon")
          (else        "Good evening"))))
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  modules: [],
};
