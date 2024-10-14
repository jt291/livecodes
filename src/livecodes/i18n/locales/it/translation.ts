// ATTENTION: This file is auto-generated from source code. Do not edit manually!

import type { I18nTranslation } from '../models';

const translation: I18nTranslation = {
  about: {
    documentations: {
      aboutUs: 'Chi siamo',
      contact: 'Contatto',
      heading: 'Documentazione',
      home: 'Home',
      license: 'Licenza',
    },
    heading: 'Informazioni su LiveCodes',
    livecodes: {
      para1:
        '<1><tag-2>LiveCodes</tag-2></tag-1> è un playground di codice <tag-3>open-source</tag-3>, <tag-4>ricco di funzionalità</tag-4>, <tag-5>lato client</tag-5>. Attualmente, sono supportati <tag-6>oltre 80 linguaggi/<tag-7></tag-7>framework</tag-6>. Può essere utilizzato come app autonoma o può essere <tag-8>incorporato</tag-8> in qualsiasi pagina web. Ci sono molti modi per <tag-9>precompilare i playground</tag-9> con il codice.',
      para2:
        "Un'ampia gamma di <1>opzioni di configurazione</tag-1> lo rende molto flessibile. Un potente <tag-2>SDK</tag-2> (per <tag-3>JS/TS</tag-3>, <tag-4>React</tag-4>, <tag-5>Vue</tag-5> e <tag-6>Svelte</tag-6>) facilita l'<tag-7>incorporazione</tag-7> e la <tag-8>comunicazione</tag-8> con i playground. È disponibile una <tag-9>documentazione completa</tag-9> con esempi di codice, demo dal vivo e screenshot.",
    },
    version: {
      app: "Versione dell'app: {{APP_VERSION}}",
      appPermanentUrl: "URL permanente dell'app",
      commit: 'Commit Git: {{COMMIT_SHA}}',
      heading: 'Versione',
      sdk: 'Versione SDK: {{SDK_VERSION}}',
      sdkPermanentUrl: 'URL permanente SDK',
    },
  },
  app: {
    copy: {
      hint: 'Copia (Ctrl/Cmd + A, Ctrl/Cmd + C)',
    },
    copyAsUrl: {
      hint: 'Copia il codice come URL dati',
    },
    customSettings: {
      hint: 'Impostazioni personalizzate',
    },
    editorMode: {
      hint: 'Modalità editor',
    },
    editorSettings: {
      hint: 'Impostazioni editor',
    },
    externalResources: {
      hint: 'Risorse esterne',
    },
    focus: {
      hint: 'Attiva/disattiva modalità focus',
    },
    format: {
      hint: 'Formatta (Alt + Shift + F)',
    },
    fullscreen: {
      hint: 'Schermo intero',
    },
    logo: {
      title: 'LiveCodes: Playground di codice che funziona nel browser!',
    },
    projectInfo: {
      hint: 'Informazioni progetto',
    },
    redo: {
      hint: 'Ripeti (Ctrl/Cmd + Shift + Z)',
    },
    result: {
      hint: 'Mostra/nascondi risultato',
    },
    run: {
      hint: 'Esegui (Shift + Invio)',
    },
    share: {
      hint: 'Condividi',
    },
    undo: {
      hint: 'Annulla (Ctrl/Cmd + Z)',
    },
    untitledProject: 'Progetto senza titolo',
  },
  assets: {
    add: {
      dataURL: {
        desc: 'Aggiungi risorsa come <1>URL dati</tag-1> codificato in base64.',
        heading: 'URL dati',
        label: 'Aggiungi file',
      },
      githubPages: {
        desc: 'Distribuisci la risorsa su GitHub Pages. Il file viene inviato al ramo <1>gh-pages</tag-1> del repository <tag-2>livecodes-assets</tag-2> sul tuo account GitHub. Se il repository non esiste già, verrà creato un repository pubblico.',
        heading: 'GitHub Pages',
        label: 'Carica file',
      },
      heading: 'Aggiungi risorsa',
    },
    delete: {
      all: 'Eliminare {{assets}} risorse?',
      one: 'Eliminare la risorsa: {{asset}}?',
    },
    deleteAll: 'Elimina tutto',
    generic: {
      clickToCopyURL: "Clicca per copiare l'URL",
    },
    heading: 'Risorse',
    link: {
      date: 'Data: {{modified}}',
      type: 'Tipo: {{type}}',
      url: 'URL: {{url}}',
    },
    loadFile: {
      error: {
        failedToUpload: 'Errore: Caricamento del file fallito',
        unauthenticated: 'Errore: Utente non autenticato',
      },
      upload: 'Carica file',
      uploading: 'Caricamento in corso...',
    },
    noMatch: 'Nessuna risorsa corrisponde a questi filtri.',
    noSavedAssets: 'Non hai risorse salvate.',
    processAsset: {
      addFile: 'File aggiunto: ',
      deployNotice: 'La risorsa dovrebbe essere disponibile a questo URL a breve (~1 min).',
      success: 'File aggiunto alle risorse!',
      urlLabel: 'URL: ',
    },
    resetFilters: 'Reimposta',
    search: 'Cerca',
    sort: {
      date: 'Data',
      fileName: 'Nome file',
      heading: 'Ordina per:',
    },
    type: {
      archive: 'Archivio',
      audio: 'Audio',
      csv: 'CSV',
      font: 'Font',
      html: 'HTML',
      icon: 'Icona',
      image: 'Immagine',
      json: 'JSON',
      other: 'Altro',
      script: 'Script',
      stylesheet: 'Foglio di stile',
      text: 'Testo',
      video: 'Video',
      xml: 'XML',
    },
    types: {
      all: 'Tutti i tipi',
    },
    url: {
      fail: "Impossibile copiare l'URL.",
      success: "L'URL è stato copiato negli appunti.",
    },
  },
  backup: {
    backup: {
      assets: 'Risorse',
      button: 'Backup',
      desc: 'Esegui il backup dei dati di LiveCodes, in modo che possano essere ripristinati successivamente su questo o altri dispositivi. <1></tag-1> Visita la <tag-2>documentazione</tag-2> per i dettagli.',
      heading: 'Backup',
      projects: 'Progetti',
      settings: 'Impostazioni utente',
      snippets: 'Frammenti di codice',
      templates: 'Modelli utente',
    },
    backupBtn: 'Backup',
    error: {
      atLeastOneStore: 'Seleziona almeno un archivio da sottoporre a backup',
      incorrectFileType: 'Errore: Tipo di file non corretto',
    },
    fileInputLabel: 'Ripristina da file',
    heading: 'Backup / Ripristino',
    inProgress: 'In corso...',
    restore: {
      desc: 'Ripristina i dati di LiveCodes precedentemente sottoposti a backup. <1></tag-1> Se scegli di sostituire il contenuto attuale, potresti voler eseguire prima un backup. <tag-2></tag-2> Visita la <tag-3>documentazione</tag-3> per i dettagli.',
      fromFile: 'Ripristina da file',
      heading: 'Ripristina',
      mode: {
        merge: 'Unisci con il contenuto attuale',
        replace: 'Sostituisci il contenuto attuale',
      },
      success: 'Ripristino completato con successo!',
    },
  },
  broadcast: {
    broadcastBtn: {
      start: 'Trasmetti',
      stop: 'Interrompi trasmissione',
    },
    broadcasting: 'Trasmissione in corso...',
    channelURL: 'URL del canale',
    connecting: 'Connessione in corso...',
    desc: 'Trasmetti la pagina dei risultati ad altri browser/dispositivi in tempo reale. Visita la <1>documentazione</tag-1> per i dettagli.',
    error: {
      generic: 'Trasmissione fallita!',
      serverURLRequired: "L'URL del server è richiesto!",
    },
    heading: 'Trasmissione',
    includeSourceCode: 'Includi codice sorgente',
    serverURL: {
      heading: 'URL del server',
    },
  },
  core: {
    broadcast: {
      heading: 'Trasmissione',
      successSetToken: 'Token utente di trasmissione impostato con successo',
    },
    changeLanguage: {
      hint: 'Cambia lingua',
      message: 'Caricamento di {{lang}}. Potrebbe richiedere del tempo!',
    },
    copy: {
      copied: 'Codice copiato negli appunti',
      copiedAsDataURL: 'Codice copiato come URL dati',
      hint: 'Copiato!',
      title: 'Copia',
    },
    error: {
      couldNotLoadTemplate: 'Impossibile caricare il modello: {{template}}',
      failedToCopyCode: 'Impossibile copiare il codice',
      failedToLoadTemplate: 'Caricamento del modello fallito',
      failedToLoadTemplates: 'Caricamento dei modelli di partenza fallito',
      failedToParseSettings: 'Impossibile analizzare le impostazioni come JSON',
      invalidCommand: 'Comando non valido!',
      invalidImport: 'URL di importazione non valido',
      invalidPanelId: 'ID pannello non valido',
      invalidToken: 'Token non valido!',
      login: 'Errore di accesso!',
      logout: 'Errore di disconnessione!',
      noResultContainer: 'Contenitore dei risultati non trovato',
      unavailable: 'Comando non disponibile',
      unavailableForEmbeds: 'Comando non disponibile per gli incorporamenti',
    },
    export: {
      gist: 'Creazione di un gist pubblico su GitHub...',
    },
    fork: {
      success: 'Forkato come nuovo progetto',
    },
    fullScreen: {
      enter: 'Schermo intero',
      exit: 'Esci dallo schermo intero',
    },
    import: {
      loading: 'Caricamento del progetto...',
    },
    layout: {
      horizontal: 'Layout orizzontale',
      responsive: 'Layout responsive',
      vertical: 'Layout verticale',
    },
    loadDefaults: {
      template: 'Caricamento del modello predefinito',
    },
    login: {
      success: 'Accesso effettuato con successo',
      successWithName: 'Accesso effettuato come: {{name}}',
    },
    logout: {
      success: 'Disconnessione effettuata con successo',
    },
    result: {
      hint: 'Mostra risultato in una nuova finestra',
    },
    save: {
      success: 'Progetto salvato localmente sul dispositivo!',
      successWithName: 'Progetto "{{name}}" salvato sul dispositivo.',
    },
    template: {
      blank: 'Progetto vuoto',
      delete: 'Eliminare il modello "{{item}}"?',
      javascript: 'Starter JavaScript',
      react: 'Starter React',
      saved: 'Salvato come nuovo modello',
      typescript: 'Starter TypeScript',
      vue: 'Starter Vue 3',
    },
    unload: {
      notSaved: 'Le modifiche apportate potrebbero non essere state salvate.',
    },
    zoom: {
      hint: 'Zoom',
    },
  },
  customSettings: {
    JSON: 'JSON impostazioni personalizzate',
    heading: 'Impostazioni personalizzate',
    load: 'Carica',
  },
  deploy: {
    create: {
      desc: 'Un nuovo repository <1>pubblico</tag-1> verrà creato. La pagina dei risultati sarà inviata al ramo <tag-2>gh-pages</tag-2>.',
      heading: 'Crea nuovo repository',
      repoName: 'Nome del repository <1></tag-1>',
    },
    error: {
      generic: 'Distribuzione fallita!',
      repoNameExists: 'Il nome del repository esiste già',
      repoNameRequired: 'Il nome del repository è obbligatorio',
    },
    existing: {
      desc: 'Un nuovo commit sarà aggiunto al ramo <1>gh-pages</tag-1>.',
      heading: 'Repository esistente',
      repoName: 'Nome del repository',
    },
    generic: {
      commitMessage: 'Messaggio di commit',
      commitSourceCodePublic: 'Commit del codice sorgente (pubblico)',
      deployBtn: 'Distribuisci',
      deploying: 'Distribuzione in corso...',
    },
    heading: 'Distribuisci su GitHub Pages',
    searchRepo: 'Cerca nei tuoi repository pubblici...',
  },
  editorSettings: {
    appLanguage: {
      heading: "Lingua dell'interfaccia dell'app",
      note: "L'app verrà ricaricata per applicare le modifiche dopo il cambio di lingua.",
    },
    closeBrackets: 'Chiudi automaticamente parentesi e virgolette',
    codeJarDesc: '* Le funzionalità contrassegnate non sono disponibili in CodeJar.',
    default: 'Predefinito',
    desc: 'Si prega di consultare la <1>documentazione</tag-1> per i dettagli.',
    editor: {
      codejar: 'CodeJar',
      codemirror: 'CodeMirror',
      heading: 'Editor',
      monaco: 'Monaco',
    },
    editorMode: {
      emacs: 'Emacs',
      heading: 'Modalità Editor *',
      vim: 'Vim',
    },
    editorTheme: 'Tema Editor',
    emmet: 'Abilita Emmet *',
    enableAI: {
      heading: 'Abilita Assistente AI per il Codice',
      note: 'Alimentato da <1><tag-2></tag-2></tag-1>',
    },
    fontFamily: 'Famiglia di caratteri',
    fontSize: 'Dimensione carattere',
    format: 'Formato',
    heading: 'Impostazioni Editor',
    lineNumbers: 'Mostra numeri di riga',
    notAvailableInCodeJar: 'Non disponibile in CodeJar',
    preview: 'Anteprima',
    semicolons: 'Formato: Usa punto e virgola',
    singleQuote: 'Formato: Usa virgolette singole',
    tabSize: 'Dimensione tabulazione',
    theme: 'Modalità scura',
    trailingComma: 'Formato: Usa virgole finali',
    useTabs: {
      heading: 'Indentazione',
      spaces: 'Spazi',
      tabs: 'Tabulazioni',
    },
    wordWrap: 'A capo automatico',
  },
  embed: {
    activeEditor: {
      heading: 'Editor Attivo',
      markup: '{{markup}}',
      script: '{{script}}',
      style: '{{style}}',
    },
    activeTool: {
      compiled: 'Compilato',
      console: 'Console',
      heading: 'Strumento Attivo',
      tests: 'Test',
    },
    code: {
      copy: 'Copia Codice',
      heading: 'Codice',
    },
    desc: 'Si prega di consultare la <1>documentazione</tag-1> per configurazioni avanzate.',
    embedType: {
      cdn: 'Script (CDN)',
      heading: 'Tipo di Incorporamento',
      html: 'HTML',
      iframe: 'Iframe',
      npm: 'JS (npm)',
      react: 'React',
      svelte: 'Svelte',
      vue: 'Vue',
    },
    heading: 'Incorpora Progetto',
    lite: 'Modalità Lite',
    loading: {
      click: 'Al clic',
      eager: 'Immediato',
      heading: 'Caricamento',
      lazy: 'Pigro',
    },
    mode: {
      codeblock: 'Blocco di Codice',
      editor: 'Editor',
      full: 'Completo',
      heading: 'Modalità di Visualizzazione',
      result: 'Risultato',
    },
    permanentUrl: 'URL Permanente',
    preview: 'Anteprima',
    previewLoading: 'Caricamento Anteprima...',
    readonly: 'Sola lettura',
    theme: {
      dark: 'Scuro',
      heading: 'Tema',
      light: 'Chiaro',
    },
    tools: {
      closed: 'Chiuso',
      full: 'Completo',
      heading: 'Strumenti',
      none: 'Nessuno',
      open: 'Aperto',
    },
    view: {
      editor: 'Editor',
      heading: 'Vista Predefinita',
      result: 'Risultato',
      split: 'Diviso',
    },
  },
  generic: {
    about: {
      blog: 'Blog',
      configuration: 'Configurazione',
      features: 'Caratteristiche',
      gettingStarted: 'Per Iniziare',
      github: 'GitHub',
      sdk: 'SDK',
      sponsor: 'Sponsorizza',
      twitter: '𝕏 / Twitter',
    },
    clickForInfo: 'Clicca per informazioni...',
    close: 'Chiudi',
    error: {
      authentication: 'Errore di autenticazione!',
      exceededSize: 'Errore: Dimensione superata {{size}} MB',
      failedToReadFile: 'Errore: Impossibile leggere il file',
    },
    loading: 'Caricamento...',
    more: 'Altro...',
    optional: 'Opzionale',
    required: 'Obbligatorio',
  },
  import: {
    bulk: {
      desc: 'Importa in blocco più progetti nei tuoi progetti salvati. I progetti possono essere esportati dalla schermata <1>Progetti Salvati</tag-1>.',
      fromFile: 'Importazione in blocco da file locale',
      fromURL: 'Importazione in blocco da URL',
      heading: 'Importazione in Blocco',
      started: 'Importazione in blocco avviata...',
    },
    code: {
      desc: 'Fonti supportate: <1> <tag-2>Gist GitHub</tag-2> <tag-3>File GitHub</tag-3> <tag-4>Directory in un repository GitHub</tag-4> <tag-5>Snippet Gitlab</tag-5> <tag-6>File Gitlab</tag-6> <tag-7>Directory in un repository Gitlab</tag-7> <tag-8>JS Bin</tag-8> <tag-9>Codice grezzo</tag-9> <tag-10>Codice nel DOM della pagina web</tag-10> <tag-11>Codice in file zip</tag-11> <tag-12>Playground ufficiali<tag-13></tag-13>(TypeScript, Vue e Svelte)</tag-12> </tag-1> Si prega di visitare la <tag-14>documentazione</tag-14> per i dettagli.',
      fromFile: 'Importa file locali',
      fromURL: 'Importa da URL',
      heading: 'Importa Codice',
    },
    error: {
      failedToLoadURL: "Errore: impossibile caricare l'URL",
      invalidConfigFile: 'File di configurazione non valido',
      invalidFile: 'Errore: File non valido',
    },
    generic: {
      file: 'File locale',
      url: 'URL',
    },
    heading: 'Importa',
    json: {
      desc: "Importa un singolo JSON di progetto nell'editor. Un progetto può essere esportato dal menu dell'app → Esporta → Esporta Progetto (JSON).",
      fromFile: 'Importa progetto da file locale',
      fromURL: 'Importa progetto da URL',
      heading: 'Importa JSON del Progetto',
    },
    success: 'Importazione riuscita!',
  },
  login: {
    accessAllowed: 'Consenti accesso a:',
    desc: "<1>Effettuando l'accesso, accetti che i <tag-2>cookie</tag-2> possano essere memorizzati sul tuo dispositivo.</tag-1> <tag-3> <tag-4>Perché sono richieste queste autorizzazioni?</tag-4> </tag-3> <tag-5> <tag-6>Come modificare/revocare le autorizzazioni?</tag-6> </tag-5>",
    gist: 'Gist',
    heading: 'Accedi con GitHub',
    loginAs: 'Accesso effettuato come {{name}}',
    loginBtn: 'Accedi',
    logout: 'Esci',
    privateRepo: 'Repository Privati',
    publicRepo: 'Repository',
  },
  menu: {
    about: 'Informazioni',
    appHelp: {
      heading: 'Aiuto',
      hint: 'Aiuto',
    },
    appProject: {
      heading: 'Progetto',
      hint: 'Progetto',
    },
    appSettings: {
      heading: 'Impostazioni',
      hint: 'Impostazioni',
    },
    assets: 'Risorse …',
    autoSave: 'Salvataggio automatico',
    autoUpdate: 'Aggiornamento automatico',
    backup: 'Backup / Ripristino …',
    broadcast: 'Trasmissione …',
    customSettings: 'Impostazioni personalizzate …',
    delay: {
      heading: 'Ritardo: <1>1.5</tag-1>s',
      hint: "Ritardo prima dell'aggiornamento automatico",
    },
    deploy: 'Distribuzione …',
    editorSettings: 'Impostazioni editor …',
    embed: 'Incorpora …',
    export: {
      codepen: 'Modifica in CodePen',
      gist: 'Esporta su GitHub Gist',
      heading: 'Esporta',
      jsfiddle: 'Modifica in JSFiddle',
      json: 'Esporta progetto (JSON)',
      result: 'Esporta risultato (HTML)',
      src: 'Esporta sorgente (ZIP)',
    },
    formatOnsave: 'Formatta al salvataggio',
    import: 'Importa …',
    layout: 'Layout verticale',
    login: 'Accedi …',
    logout: 'Esci',
    new: 'Nuovo …',
    open: 'Apri …',
    project: 'Informazioni progetto …',
    recoverUnsaved: 'Recupera non salvato',
    resources: 'Risorse esterne …',
    save: 'Salva',
    saveAs: {
      fork: 'Fork (Nuovo progetto)',
      heading: 'Salva come',
      template: 'Modello',
    },
    share: 'Condividi …',
    showSpacing: {
      heading: 'Mostra spaziatura',
      hint: 'Premi Alt/Option e muovi il cursore sulla pagina dei risultati',
    },
    snippets: 'Frammenti di codice …',
    sync: 'Sincronizzazione (beta) … <1> ⏳</tag-1>',
    theme: 'Tema scuro',
    welcome: {
      heading: 'Benvenuto …',
      hint: "Mostra schermata di benvenuto all'avvio",
    },
  },
  open: {
    defaultTemplate: 'Modello predefinito ',
    delete: {
      all: 'Eliminare {{projects}} progetti?',
      deleting: 'Eliminazione progetti in corso...',
      one: 'Eliminare il progetto: {{project}}?',
    },
    deleteAll: 'Elimina tutto',
    exportAll: 'Esporta tutto',
    filter: {
      language: 'filtra per linguaggio',
      tag: 'filtra per tag',
    },
    heading: 'Progetti salvati',
    import: 'Importa',
    lastModified: 'Ultima modifica: {{modified}}',
    noData: {
      desc: 'Puoi salvare un progetto dal (menu&nbsp;impostazioni&nbsp;&gt;&nbsp;Salva) o con la scorciatoia da tastiera (Ctrl/Cmd&nbsp;+&nbsp;S).',
      heading: 'Non hai progetti salvati.',
    },
    noMatch: 'Nessun progetto corrisponde a questi filtri.',
    placeholder: {
      allLanguages: 'Tutti i linguaggi',
      filterByTags: 'Filtra per tag',
      search: 'Cerca',
    },
    removeDefault: '(rimuovi)',
    reset: 'Reimposta',
    setAsDefault: 'Imposta come predefinito',
    sort: {
      heading: 'Ordina per:',
      lastModified: 'Ultima modifica',
      title: 'Titolo',
    },
  },
  project: {
    desc: 'Descrizione',
    head: 'Aggiungi a &lt;head&gt;',
    heading: 'Informazioni progetto',
    htmlAttr: 'Attributi per &lt;html&gt;',
    tags: 'Tag',
    title: 'Titolo progetto',
  },
  recoverPrompt: {
    desc: 'Il tuo ultimo progetto ha modifiche non salvate!',
    heading: 'Recuperare il progetto non salvato?',
    meta: 'Titolo: <1></tag-1> <tag-2></tag-2> Ultima modifica: <tag-3></tag-3>',
    notShowAgain: 'Non mostrare più questo messaggio.',
    prompt: {
      discard: 'Scarta progetto non salvato',
      heading: '<1></tag-1>Vuoi recuperarlo ora?',
      recover: "Recupera progetto nell'editor",
      save: 'Salva sul dispositivo e continua',
    },
  },
  resources: {
    browseOnJsDelivr: 'Sfoglia i file del pacchetto su jsDelivr',
    cssPresets: {
      heading: 'Preset CSS',
      none: 'Nessuno',
      normalizeCss: 'Normalize.css',
      resetCss: 'Reset CSS',
    },
    error: {
      failedToLoadResults: 'Impossibile caricare i risultati!',
      noResultsFound: 'Nessun risultato trovato per: ',
    },
    fonts: {
      add: 'Aggiungi',
      heading: 'Font <1>(forniti da Google Fonts)</tag-1>',
      select: 'Seleziona font ...',
    },
    heading: 'Risorse esterne',
    scripts: 'Script esterni',
    search: {
      heading: 'Cerca pacchetti <1>(forniti da jsDelivr)</tag-1>',
      placeholder: 'es. jquery, lodash@4, bootstrap@5.2.3, ...',
    },
    stylesheets: 'Fogli di stile esterni',
    urlDesc:
      'Aggiungi URL di fogli di stile/script. Ogni URL dovrebbe essere su una riga separata.',
  },
  savePrompt: {
    heading: 'Modifiche non salvate',
    prompt: {
      cancel: 'Annulla',
      discard: 'Non salvare',
      heading:
        'Le modifiche apportate potrebbero non essere salvate. <1></tag-1> Vuoi salvare ora?',
      save: 'Salva',
    },
  },
  share: {
    characters: '{{urlLength}} caratteri',
    copy: {
      clickToCopy: 'Clicca per copiare',
      copied: 'URL copiato negli appunti',
    },
    encodedURL: 'Ottieni URL codificato',
    error: {
      failedToCopy: 'Copia negli appunti fallita!',
      failedToGenerateURL: "Impossibile generare l'URL breve!",
    },
    expireInOneYear: 'Scade tra 1 anno',
    generateURL: 'Generazione URL …',
    heading: 'Condividi',
    permanentURL: 'URL permanente',
    qrcode: {
      clickToDownload: 'Clicca per scaricare',
      generating: 'Generazione in corso...',
    },
    services: {
      copyUrl: 'Copia URL',
      devTo: 'Dev.to',
      email: 'Email',
      facebook: 'Facebook',
      hackerNews: 'Hacker News',
      linkedIn: 'LinkedIn',
      pinterest: 'Pinterest',
      pocket: 'Pocket',
      qrCode: 'Codice QR',
      reddit: 'Reddit',
      share: 'Condividi tramite …',
      telegram: 'Telegram',
      tumblr: 'Tumblr',
      twitter: '𝕏 / Twitter',
      whatsApp: 'WhatsApp',
    },
    shortURL: 'Ottieni URL breve',
  },
  snippets: {
    action: {
      copy: 'Copia',
      delete: 'Elimina',
      edit: 'Modifica',
    },
    add: {
      code: 'Codice',
      desc: 'Descrizione',
      heading: 'Aggiungi frammento',
      language: 'Linguaggio',
      save: 'Salva',
      snippets: 'Frammenti',
      title: 'Titolo',
    },
    copy: {
      clickToCopySnippet: 'Clicca per copiare il frammento',
      copied: 'Il frammento è stato copiato negli appunti.',
    },
    delete: {
      all: 'Eliminare {{snippets}} frammenti?',
      one: 'Eliminare il frammento: {{snippet}}?',
    },
    deleteAll: 'Elimina tutto',
    error: {
      failedToCopy: "Impossibile copiare l'URL.",
      noTitle: 'Aggiungi un titolo al frammento.',
    },
    filter: {
      language: 'filtra per linguaggio',
    },
    heading: 'Frammenti di codice',
    lastModified: 'Ultima modifica: {{modified}}',
    noMatch: 'Nessun frammento corrisponde a questi filtri.',
    noSavedSnippets: 'Non hai frammenti salvati.',
    placeholder: {
      allLanguages: 'Tutti i linguaggi',
      search: 'Cerca',
    },
    reset: 'Reimposta',
    save: {
      success: 'Frammento salvato localmente sul dispositivo!',
    },
    sort: {
      date: 'Data',
      heading: 'Ordina per:',
      title: 'Titolo',
    },
    text: 'Testo semplice',
  },
  splash: {
    loading: 'Caricamento di LiveCodes…',
  },
  sync: {
    autoSync: 'Sincronizzazione automatica',
    create: {
      desc: 'Verrà creato un nuovo repository <1>privato</tag-1>. I tuoi dati locali di LiveCodes saranno sincronizzati con il ramo <tag-2>main</tag-2>.',
      heading: 'Crea nuovo repository',
      repoName: 'Nome del repository',
    },
    error: {
      generic: 'Sincronizzazione fallita!',
      repoNameRequired: 'Il nome del repository è obbligatorio',
    },
    existing: {
      desc: 'I tuoi dati locali di LiveCodes saranno sincronizzati con il ramo <1>main</tag-1>.',
      heading: 'Repository esistente',
      repoName: 'Nome del repository',
    },
    heading: 'Sincronizza con repository GitHub',
    searchRepos: 'Cerca nei tuoi repository...',
    success: 'Sincronizzazione completata!',
    syncBtn: 'Sincronizza',
    syncInProgress: 'Sincronizzazione in corso...',
    syncStarted: 'Sincronizzazione avviata...',
  },
  templates: {
    heading: 'Nuovo Progetto',
    noUserTemplates: {
      desc: 'Puoi salvare un progetto come modello da <1></tag-1>(Menu&nbsp;App&nbsp;&gt;&nbsp;Salva&nbsp;come&nbsp;&gt; Modello).',
      heading: 'Non hai modelli salvati.',
    },
    starter: {
      angular: 'Starter Angular',
      assemblyscript: 'Starter AssemblyScript',
      astro: 'Starter Astro',
      backbone: 'Starter Backbone',
      blank: 'Progetto Vuoto',
      blockly: 'Starter Blockly',
      bootstrap: 'Starter Bootstrap',
      civet: 'Starter Civet',
      clio: 'Starter Clio',
      clojurescript: 'Starter ClojureScript',
      coffeescript: 'Starter CoffeeScript',
      commonlisp: 'Starter Common Lisp',
      cpp: 'Starter C++',
      diagrams: 'Starter Diagrammi',
      fennel: 'Starter Fennel',
      gleam: 'Starter Gleam',
      go: 'Starter Go',
      heading: 'Modelli di Partenza',
      imba: 'Starter Imba',
      javascript: 'Starter JavaScript',
      jest: 'Starter Jest',
      'jest-react': 'Starter Jest/React',
      jquery: 'Starter jQuery',
      julia: 'Starter Julia',
      knockout: 'Starter Knockout',
      lit: 'Starter Lit',
      livescript: 'Starter LiveScript',
      loading: 'Caricamento dei modelli di partenza...',
      lua: 'Starter Lua',
      'lua-wasm': 'Starter Lua (Wasm)',
      malina: 'Starter Malina.js',
      markdown: 'Starter Markdown',
      mdx: 'Starter MDX',
      ocaml: 'Starter OCaml',
      perl: 'Starter Perl',
      php: 'Starter PHP',
      'php-wasm': 'Starter PHP (Wasm)',
      postgresql: 'Starter PostgreSQL',
      preact: 'Starter Preact',
      prolog: 'Starter Prolog',
      python: 'Starter Python',
      r: 'Starter R',
      react: 'Starter React',
      'react-native': 'Starter React Native',
      reason: 'Starter Reason',
      rescript: 'Starter ReScript',
      riot: 'Starter Riot.js',
      ruby: 'Starter Ruby',
      'ruby-wasm': 'Starter Ruby (Wasm)',
      scheme: 'Starter Scheme',
      solid: 'Starter Solid',
      sql: 'Starter SQL',
      stencil: 'Starter Stencil',
      svelte: 'Starter Svelte',
      tailwindcss: 'Starter Tailwind CSS',
      tcl: 'Starter Tcl',
      teal: 'Starter Teal',
      typescript: 'Starter TypeScript',
      vue: 'Starter Vue 3 SFC',
      vue2: 'Starter Vue 2',
      wat: 'Starter WebAssembly Text',
    },
    user: {
      heading: 'I Miei Modelli',
      loading: 'Caricamento dei modelli utente...',
    },
  },
  testEditor: {
    heading: 'Modifica Test',
    load: 'Carica',
    tests: 'Test',
  },
  toolspane: {
    close: 'Chiudi',
    compiled: {
      title: 'Compilato',
    },
    console: {
      clear: 'Pulisci console',
      title: 'Console',
    },
    test: {
      edit: 'Modifica',
      error: '<1><tag-2>Errore nel test!</tag-2></tag-1>',
      loading: '<1>Caricamento dei test...</tag-1>',
      noTest: '<1>Questo progetto non ha test!</tag-1>',
      reset: 'Reimposta',
      run: {
        desc: 'Ctrl/Cmd + Alt + T',
        heading: 'Esegui',
      },
      summary: {
        desc: 'Test: {{failed}}\n      {{passed}}\n      {{skipped}}\n      {{total}}<1></tag-1>\nTempo: {{duration}}s',
        failed: '{{failedNum}} falliti',
        passed: '{{passedNum}} passati',
        skipped: '{{skippedNum}} saltati',
        total: '{{totalNum}} totali',
      },
      title: 'Test',
      watch: {
        desc: 'Esegui i test quando il codice cambia',
        heading: 'Osserva',
      },
    },
  },
  welcome: {
    about: {
      documentation: 'Documentazione',
      heading: 'Informazioni su LiveCodes',
    },
    heading: 'Benvenuto',
    recent: {
      heading: 'Recenti',
    },
    recover: {
      cancel: 'Annulla',
      heading: 'Recupera',
      lastModified: 'Ultima modifica: <1></tag-1>',
      recover: 'Recupera',
      save: 'Salva',
      unsavedChanges: 'Il tuo ultimo progetto aveva modifiche non salvate:',
    },
    showOnStartup: "Mostra all'avvio",
    start: {
      heading: 'Inizia',
      import: 'Importa...',
      loadDefaultTemplate: 'Carica modello predefinito',
      new: 'Nuovo...',
      noDefaultTemplate: 'Nessun modello predefinito',
      open: 'Apri...',
    },
    templates: {
      heading: 'Modelli di Partenza',
    },
  },
};

export default translation;
