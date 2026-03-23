<<<<<<< HEAD
# 🚀 Arjun Sharma — Futuristic MCA Portfolio

A fully animated, React + Vite portfolio with futuristic anime aesthetics,
interactive particle backgrounds per section, real skill logos, and EmailJS contact.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ParticleBg.jsx   # Animated canvas backgrounds (7 unique types)
│   ├── UI.jsx           # Cursor, Navbar, GlassCard, GlitchText, etc.
│   ├── Hero.jsx         # Hero section with typewriter + rotating rings
│   ├── Sections.jsx     # About, Education, Skills, Experience
│   ├── Projects.jsx     # Project cards with images
│   ├── Contact.jsx      # Contact form with EmailJS
│   └── AIAssistant.jsx  # Floating AI chatbot
├── data/
│   └── index.js         # All portfolio content (edit here!)
├── App.jsx
├── main.jsx
└── index.css            # Global styles + animations
```

---

## 🔧 Personalisation

### 1. Your Details
Edit **`src/data/index.js`** — all content is in one place:
- Name, roles, tags
- Education, Experience, Projects
- Contact links
- AI chatbot responses

### 2. Profile Photo
In **`src/components/Hero.jsx`**, change:
```js
const PROFILE_IMG = null;           // default (shows emoji placeholder)
const PROFILE_IMG = '/profile.jpg'; // your photo in /public folder
```
Place `profile.jpg` inside the `/public` folder.

### 3. Resume PDF
Place your `resume.pdf` inside the `/public` folder.
The "Download Resume" button already points to `/resume.pdf`.

### 4. EmailJS (Contact Form)
1. Sign up free at https://www.emailjs.com
2. Add Email Service → copy **Service ID**
3. Create Email Template with variables:
   - `{{from_name}}` `{{from_email}}` `{{subject}}` `{{message}}`
   → copy **Template ID**
4. Account → API Keys → copy **Public Key**

Edit **`src/components/Contact.jsx`**:
```js
const EMAILJS_SERVICE_ID  = 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxxxxxxxxxx';
```

### 5. Project Images & Links
In `src/data/index.js`, update each project's:
- `img`: your screenshot URL or `/public/projects/proj1.jpg`
- `github`: your GitHub repo URL
- `demo`: live demo URL

### 6. Skill Logos
Logos are loaded from **devicons CDN** automatically.
If a logo fails to load, a ⚙️ fallback shows.
To use a local logo: `logo: '/logos/react.svg'`

---

## 🌐 Deploy

```bash
# Build for production
npm run build

# Preview build locally
npm run preview
```

Upload the `dist/` folder to:
- **Netlify**: drag & drop `dist/` at netlify.com
- **Vercel**: `npx vercel --prod`
- **GitHub Pages**: use `gh-pages` package

---

## 🎨 Design System

| Variable | Value       | Usage         |
|----------|-------------|---------------|
| `--c`    | `#00ffe7`   | Cyan primary  |
| `--p`    | `#bf00ff`   | Purple        |
| `--pk`   | `#ff2d78`   | Pink          |
| `--g`    | `#00ff88`   | Green         |
| `--o`    | `#ff9500`   | Orange        |
| `--bg`   | `#020408`   | Background    |

Fonts: **Orbitron** (headings) · **Share Tech Mono** (labels) · **Exo 2** (body)

---

## 📦 Dependencies

| Package             | Purpose                |
|---------------------|------------------------|
| react + react-dom   | UI framework           |
| @emailjs/browser    | Contact form emails    |
| lucide-react        | Icons (optional)       |
| vite                | Build tool             |
=======
# kunga-portfolio
>>>>>>> 0fb5a289a3489bb0a72c2e71402172f0c2eef740
