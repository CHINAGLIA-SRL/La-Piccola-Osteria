# La Piccola Osteria — Sito web

Sito statico (HTML + CSS + immagini). Nessuna build necessaria.

## Struttura
```
production/
├── index.html        ← Home
├── storia.html       ← La Nostra Storia
├── contatti.html     ← Dove Siamo (mappa, orari, contatti)
├── styles.css        ← Foglio di stile condiviso
├── favicon.svg       ← Icona del sito
├── robots.txt
├── vercel.json       ← URL puliti (es. /storia invece di /storia.html)
└── images/           ← Foto del locale e dei piatti
```

## Pubblicare su Vercel
1. Vai su https://vercel.com → **Add New → Project**.
2. Se NON usi GitHub: trascina questa cartella `production/` (scompattata) nella schermata di deploy.
   Se usi GitHub: carica il contenuto di questa cartella nella radice del repository e collega il repo a Vercel.
3. Vercel riconosce il sito statico e lo pubblica. `index.html` diventa la home.

Nessun comando di build, nessun framework: lasciare i campi "Build Command" e "Output Directory" vuoti (default).

## Dati del locale
- Indirizzo: Via Luigi Einaudi, 39 — 45100 Rovigo (RO), presso Area Maurizio Tosi
- Telefono: 351 519 4009
- Recensione Google: search.google.com/local/writereview?placeid=ChIJx1IvjLr5fkcRIJbWQx-Od5Y

## Da completare quando disponibili
- QR del menù (riquadro segnaposto nella Home, sezione "Il nostro menù")
- Testo esteso della storia (pagina La Nostra Storia)
