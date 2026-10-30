# 📖 The Mayur Chronicles: Cartoon Portfolio Edition
> *A playful, interactive digital showcase bridging the art of comic aesthetics with modern web engineering.*

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live%20%26%20Active-5be3a0?style=for-the-badge&logo=statuspage&logoColor=1b1b2f" alt="Status"/>
  <img src="https://img.shields.io/badge/Author-Mayur%20Singh-ffd93d?style=for-the-badge&logo=codeforces&logoColor=1b1b2f" alt="Author"/>
  <img src="https://img.shields.io/badge/Specialization-AI%20%26%20ML%20Engineer-a78bfa?style=for-the-badge&logo=python&logoColor=white" alt="Specialization"/>
  <img src="https://img.shields.io/badge/Institute-SRMCEM%20Lucknow-ff6b9d?style=for-the-badge&logo=google-classroom&logoColor=white" alt="Institute"/>
  <img src="https://img.shields.io/badge/License-MIT-7dd3fc?style=for-the-badge&logo=opensourceinitiative&logoColor=1b1b2f" alt="License"/>
</p>

---

## 📑 Table of Contents

- [Chapter 1: Preface & Vision](#chapter-1-preface--vision)
- [Chapter 2: The Author's Dossier](#chapter-2-the-authors-dossier)
- [Chapter 3: Interactive Features & UX Design](#chapter-3-interactive-features--ux-design)
- [Chapter 4: Architectural Blueprint](#chapter-4-architectural-blueprint)
- [Chapter 5: Flagship Projects & Innovations](#chapter-5-flagship-projects--innovations)
- [Chapter 6: Photographic Chronicle (Gallery)](#chapter-6-photographic-chronicle-gallery)
- [Chapter 7: Audio Synthesis Engine](#chapter-7-audio-synthesis-engine)
- [Chapter 8: Getting Started & Local Development](#chapter-8-getting-started--local-development)
- [Chapter 9: Deployment & Maintenance](#chapter-9-deployment--maintenance)
- [Epilogue: Connect & Collaborate](#epilogue-connect--collaborate)

---

## Chapter 1: Preface & Vision

Traditional software portfolios frequently lean into monochromatic, template-driven minimalism. **The Mayur Chronicles** diverges intentionally:

```
┌─────────────────────────────────────────────────────────────┐
│  "Code is not merely logic; it is creative storytelling."  │
└─────────────────────────────────────────────────────────────┘
```

This portfolio combines:
1. **Neo-Brutalist Comic Visuals**: Bold black ink outlines (`4px solid #1b1b2f`), offset hard drop-shadows, playful pastel pop palettes, and tactile sticker badges.
2. **Kinetic Delight**: Physics-inspired bounce easing, parallax motion, SVG path micro-animations, and dynamic particle bursts.
3. **Pure Zero-Dependency Audio**: Browser-native 8-bit comic sound synthesis generated dynamically via the **Web Audio API**—no heavyweight MP3 assets required.
4. **Client-Side Generation**: An embedded PDF compilation engine powered by `jsPDF` that prints a tailored resume directly inside the browser.

---

## Chapter 2: The Author's Dossier

| Metric / Dimension | Particulars |
| :--- | :--- |
| **Full Name** | **Mayur Singh** |
| **Field of Study** | B.Tech in Artificial Intelligence & Machine Learning |
| **Institution** | Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM), Lucknow |
| **Academic Standing** | CGPA 8+ (Batch 2025 – 2029) |
| **Leadership Roles** | 🎓 Google Student Ambassador<br/>⚡ Coordinator @ AlgoZenith, SRMCEM |
| **Hackathon Honors** | 🏆 **Top 1 Winner** — Smart India Hackathon (SIH) Internal Rounds<br/>🥇 **Flowzint Hackathon Winner** (MyDukaan24) |
| **Core Technical Stack** | Python, Flask, Django, MySQL, C, Data Science & ML Foundations |

---

## Chapter 3: Interactive Features & UX Design

```
                     ┌───────────────────────────┐
                     │   Welcome Screen (GSAP)   │
                     │  3D Tilt • Confetti • Arm  │
                     └─────────────┬─────────────┘
                                   │ Enter
                                   ▼
┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
│ Dynamic Projects  │◄───┤   Hero Universe   ├───►│ Interactive Road  │
│  Live Chip Filters│    │ Typewriter • Orbit│    │ Car Follows Scroll│
└───────────────────┘    └─────────┬─────────┘    └───────────────────┘
                                   │
                                   ▼
┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
│   Photo Gallery   │◄───┤  Instant CV PDF   ├───►│ Comic Synthesizer │
│ Polaroid Lightbox │    │ jsPDF Vector Gen  │    │ Oscillator Sounds │
└───────────────────┘    └───────────────────┘    └───────────────────┘
```

### 1. Animated Welcome Gatekeeper (`welcome.js`)
- Powered by **GSAP 3.12**.
- A custom SVG vector avatar greeting the visitor with smooth waving arm kinematics and 3D pointer parallax tilt.
- Floating code glyph stickers (`</>`, `{ }`, `py`, `AI`, `🧠`, `∑`).
- Dual action exits: "ENTER MY WORLD" triggers an iris-circle clip contraction accompanied by confetti bursts; "EXIT HERE" opens a polite cartoon confirmation dialog.

### 2. Kinetic Hero Universe
- Multi-string dynamic typewriter cycling through core passions and ongoing quests.
- Interactive planetary orbit rings rotating key technologies (Python, Flask, Django, MySQL) around a comic avatar.
- Click-activated sparkle bursts and floating background clouds.

### 3. Timeline Highway (`animations.js`)
- An interactive vertical roadmap mapping academic progression from C basics (2025) to production AI/ML engineer (2029).
- A retro racing car SVG automatically drives down the asphalt track as the reader scrolls through the page.

### 4. Interactive Polaroid Gallery & Lightbox
- Nostalgic Polaroid-style photo frames featuring authentic moments from hackathons, presentations, and campus life.
- Interactive click-to-enlarge Lightbox modal with dark backdrop blur, animated scaling, and keyboard accessibility (`Esc` dismiss).

### 5. In-Browser CV Generator (`cv.js`)
- Generates a branded, vector-sharp single-page PDF CV directly within the user's browser runtime.
- Formats education, technical capabilities, hackathon titles, and GitHub links cleanly without requiring server-side printing.

---

## Chapter 4: Architectural Blueprint

```
Mayur-Portfolio/
├── 📄 index.html              # Primary entry: Welcome gate + Hero + Projects + Roadmap + CV
├── 📄 README.md                # Comprehensive project documentation & handbook
├── 🎨 css/
│   └── 🎨 style.css           # Neo-brutalist variables, comic layout, dark/light themes, lightbox
├── ⚡ js/
│   ├── ⚡ main.js              # Theme manager, Web Audio FX, cursor trails, lightbox engine
│   ├── ⚡ animations.js        # Scroll progress, typewriter, car movement, observer reveals
│   ├── ⚡ welcome.js           # GSAP welcome screen lifecycle, 3D tilt, confetti particles
│   └── ⚡ cv.js                # Vector PDF resume builder using jsPDF
├── 🖼️ gallery/
│   ├── 📄 gallery.html         # Standalone full gallery experience
│   ├── 🎨 gallery.css          # Gallery-specific layout and responsive grid styles
│   ├── ⚡ gallery.js           # Scroll progress & intersection observer triggers
│   └── 📁 images/              # High-resolution photographic archives
│       ├── photo1-notelense.jpg  # NoteLense AI Team project presentation
│       ├── photo2-sih.jpg        # Smart India Hackathon internal presentation
│       ├── photo3-profile.jpg    # Mayur portrait
│       ├── photo4-campus.jpg     # SRMCEM campus life
│       ├── photo5-stage.jpg      # Stage anchoring & fest performance
│       └── photo6-fest.jpg       # Cultural fest & concert evening
└── 📁 assets/
    ├── 📁 fonts/               # Reserved for offline typography assets
    ├── 📁 icons/               # Reserved for vector iconography
    └── 📁 images/              # Mirror archive of portfolio media
```

---

## Chapter 5: Flagship Projects & Innovations

### 1. NoteLense AI
> *AI-Driven Study Material & Notes Synthesis Engine*
- **Stack**: Python, Flask, Google Gemini AI API, HTML5/CSS3
- **Summary**: Transforms raw lecture notes and unstructured text into concise executive summaries, flash notes, and revision MCQs.
- **Source**: [github.com/mayursingh24/NOTELENSE-AI](https://github.com/mayursingh24/NOTELENSE-AI)

### 2. MyDukaan
> *Smart Digital OS for Local Indian Retailers — 🏆 Flowzint Hackathon Winner*
- **Stack**: Python, Flask, MySQL, Analytics Engine
- **Summary**: Modern management suite providing Indian shopkeepers with automated billing, inventory forecasting, customer ledger management, and financial summaries.
- **Source**: [github.com/mayursingh24/MyDukaan](https://github.com/mayursingh24/MyDukaan)

### 3. MediLens AI
> *Intelligent Healthcare Prescription & Medication Assistant*
- **Stack**: Python, Computer Vision, Gemini AI, Flask
- **Summary**: Parses handwritten medical prescriptions, extracts medication schedules, identifies safety warnings, and outputs structured dosage alerts.
- **Source**: [github.com/mayursingh24/MediLens-AI](https://github.com/mayursingh24/MediLens-AI)

### 4. Sentinel AI
> *Criminal Network Link Analysis & Intelligence System — 🏆 SIH Internal Top 1*
- **Stack**: Python, NetworkX, Graph Analytics, Flask
- **Summary**: Prototype developed for Smart India Hackathon enabling investigative bodies to visualize, trace, and analyze high-density criminal communication graphs.
- **Source**: [github.com/Prashant07-jaiswal/SIH_Prototype_189](https://github.com/Prashant07-jaiswal/SIH_Prototype_189)

---

## Chapter 6: Photographic Chronicle (Gallery)

The portfolio captures real milestones in the engineering and campus journey:

| Polaroid Asset | Captured Milestone | Context & Story |
| :---: | :--- | :--- |
| `photo1-notelense.jpg` | **NoteLense AI Presentation** | Team presentation demonstrating Gemini-powered study assistant |
| `photo2-sih.jpg` | **Smart India Hackathon 2025** | Pitching Sentinel AI system architecture on stage |
| `photo3-profile.jpg` | **Mayur Profile** | Official portrait & creator bio shot |
| `photo4-campus.jpg` | **Campus Moments** | Everyday life at SRMCEM Lucknow |
| `photo5-stage.jpg` | **Stage Anchoring** | Hosting campus events & cultural gatherings with mic in hand |
| `photo6-fest.jpg` | **Fest Nights** | Evening lights, music fests, and coordinator duties |

---

## Chapter 7: Audio Synthesis Engine

Rather than loading bulky audio files, `js/main.js` incorporates a lightweight synthesizer utilizing the native **Web Audio API**:

```javascript
// Oscillator-based Sound Generation
function tone(freqStart, freqEnd, duration, type, volume, delay) {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  // Frequency ramp creating cartoon boing / pop / tada effects
  osc.frequency.setValueAtTime(freqStart, ctx.currentTime + delay);
  osc.frequency.exponentialRampToValueAtTime(freqEnd, ctx.currentTime + delay + duration);
  // ...
}
```

- **Boing**: Sine wave sweep for card tilts, avatar clicks, and navigation pops.
- **Pop**: Snappy triangle wave for button presses and filter chips.
- **Tada**: Quintuple square-chord fanfare when interacting with achievements.
- **Mute Control**: Persisted audio toggle (`🔊`/`🔇`) respecting user preference.

---

## Chapter 8: Getting Started & Local Development

No package managers, bundling steps, or external build dependencies required.

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari).
- An active internet connection on initial load to fetch Google Fonts, GSAP, and jsPDF via CDNs.

### Execution

```bash
# 1. Clone the repository
git clone https://github.com/mayursingh24/Portfolio.git

# 2. Enter workspace
cd Portfolio

# 3. Open in your preferred browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

Or run a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

---

## Chapter 9: Deployment & Maintenance

### Deploying via GitHub Pages
1. Navigate to your repository settings: `https://github.com/mayursingh24/Portfolio/settings/pages`.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**. Within 60 seconds, your portfolio is live globally at:
   ```
   https://mayursingh24.github.io/Portfolio/
   ```

---

## Epilogue: Connect & Collaborate

Have a project idea, hackathon collaboration, or internship opportunity?

<p align="center">
  <a href="mailto:Mayur4singhhh@gmail.com">
    <img src="https://img.shields.io/badge/Email-Mayur4singhhh%40gmail.com-ffd93d?style=for-the-badge&logo=gmail&logoColor=1b1b2f" alt="Email"/>
  </a>
  <a href="https://www.linkedin.com/in/mayursingh24" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Mayur%20Singh-0077b5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/mayursingh24" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-mayursingh24-1b1b2f?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://www.instagram.com/_mayur.x24" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-_mayur.x24-e4405f?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
</p>

---

<p align="center">
  <sub>Handcrafted with ❤️, curiosity, and endless cups of chai by <b>Mayur Singh</b> © 2026</sub>
</p>
