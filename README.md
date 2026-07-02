# 🚀 Vinit Kushwaha — Portfolio Website

A premium, futuristic, Awwwards-quality personal portfolio built with pure HTML5, CSS3, and Vanilla JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### Design
- 🎨 Dark cyberpunk theme with neon accents
- 💎 Glassmorphism cards with backdrop blur
- 🌈 Purple → Blue → Cyan gradient system
- ✍️ Premium typography (Outfit + Inter)
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (ARIA labels, reduced motion support)

### Animations
- 🎬 Cinematic loading screen
- 🖱️ Custom animated cursor with magnetic effect
- 📜 GSAP ScrollTrigger reveals
- ⌨️ Character-by-character typing effect
- 🃏 Floating glass cards
- 🫧 Ripple button effects
- 📊 Animated stats counters

### 3D Experience
- 🔮 Interactive Three.js hero scene
- 🌐 Rotating wireframe icosahedrons
- 📦 Floating neon cubes
- ✨ 1500+ particle system
- 🖱️ Mouse-reactive camera movement

### Sections
1. **Hero** — 3D background, typing animation, CTAs
2. **About** — Bio, profile image, animated stats
3. **Skills** — Tabbed categories with progress bars
4. **Projects** — Filterable grid with search & modals
5. **Education** — Animated timeline
6. **Experience** — Timeline with role cards
7. **Services** — 8 service offerings
8. **Certificates** — Credential cards
9. **Achievements** — Stats & awards
10. **Testimonials** — Glass-card slider
11. **Contact** — Validated form & info cards
12. **Footer** — Links, socials, back-to-top

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure |
| CSS3 | Design system, animations, responsive layout |
| Vanilla JS (ES6+) | Interactivity, DOM manipulation |
| [Three.js](https://threejs.org/) r128 | 3D hero scene |
| [GSAP](https://greensock.com/gsap/) 3.12 | ScrollTrigger animations |
| [Font Awesome](https://fontawesome.com/) 6.5 | Icons |
| [Google Fonts](https://fonts.google.com/) | Outfit & Inter typefaces |

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML document
├── style.css           # Complete stylesheet
├── script.js           # All JavaScript functionality
├── assets/
│   ├── images/         # Project & profile images
│   ├── icons/          # Custom icons
│   └── fonts/          # Local font files (optional)
└── README.md           # This file
```

---

## 🚀 Getting Started

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```
2. Open `index.html` in your browser — no build step needed!

### Local Development Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

---

## 🎨 Customization

### Personal Information
Edit `index.html` to update:
- Name, title, and bio text
- Social media links
- Contact information
- Project details
- Education and experience entries

### Theme Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --accent-purple: #a855f7;  /* Primary accent */
  --accent-blue: #3b82f6;    /* Secondary accent */
  --accent-cyan: #06b6d4;    /* Tertiary accent */
  --bg-primary: #0a0a0f;     /* Main background */
  --bg-secondary: #12121a;   /* Card backgrounds */
}
```

### Typography
Change fonts by updating the Google Fonts import in `index.html` and the CSS variables:
```css
:root {
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Typing Effect
Modify the titles array in `script.js`:
```javascript
const typingTexts = [
  'Full Stack Developer',
  'Creative Designer',
  'UI/UX Enthusiast',
  // Add your own titles
];
```

### Projects
Update the `projectsData` array in `script.js` with your real projects.

---

## 🌐 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main** branch, root folder
4. Your site will be live at `https://username.github.io/portfolio/`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deploys

### Vercel
```bash
npx vercel --prod
```

---

## ⚡ Performance

- Three.js particle count adapts to device capability
- Images use lazy loading via IntersectionObserver
- Scroll handlers use passive event listeners
- `prefers-reduced-motion` disables animations for accessibility
- CSS `will-change` hints for animated elements
- Debounced resize handlers

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

- [Three.js](https://threejs.org/) — 3D graphics library
- [GSAP](https://greensock.com/) — Animation platform
- [Font Awesome](https://fontawesome.com/) — Icon library
- [Google Fonts](https://fonts.google.com/) — Typography

---

<p align="center">
  Made with ❤️ by <strong>Vinit Kushwaha</strong>
</p>
