# Mayur Portfolio

Cartoon-style portfolio of Mayur (B.Tech AI & ML, SRMCEM Lucknow).

## Structure

```
Mayur-Portfolio/
├── index.html          main page (welcome screen + all sections)
├── css/style.css       all styles for index.html
├── js/
│   ├── main.js         theme toggle, project filters, sound effects, cursor sparkles
│   ├── animations.js   scroll progress, typewriter, reveal, avatar burst, roadmap car, bubble, wins burst
│   ├── welcome.js      welcome screen (GSAP): character, ENTER / EXIT buttons, confetti
│   └── cv.js           "Download CV" PDF (jsPDF)
├── gallery/            standalone gallery page (gallery.html + gallery.css + gallery.js + images/)
└── assets/             images/, icons/, fonts/ (empty, ready for your files)
```

## Run

Open `index.html` in a browser (internet needed for Google Fonts, GSAP and jsPDF CDNs).
Welcome screen "EXIT HERE" destination: `EXIT_URL` at the top of `js/welcome.js`.
Script order in `index.html` matters: main, animations, jsPDF, cv, GSAP, welcome.
