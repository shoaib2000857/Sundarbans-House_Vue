# Sundarbans House — Vue 3 + Vite

> The Sundarbans House website, fully migrated from Vue/HTML/JS to **Vue 3 + Vite + Vue Router**.

---

## 🚀 Stack

| Before | After |
|--------|-------|
| Vanilla HTML pages | Vue 3 SPA with `<script setup>` |
| Plain JS (shared.js, script.js) | Vue Composition API composables |
| Multi-page navigation | Vue Router 4 (hash mode) |
| No build tool | Vite 5 |

---

## 📁 Project Structure

```
sundarbans-vue/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/          ← Copy your /assets/ folder here (LOGO.JPEG, IITM-Logo.png, frames/)
│       └── teams/       ← Copy your /teams/ folder here (Samar.jpeg, mannu.jpg, etc.)
└── src/
    ├── main.js
    ├── App.vue           ← Global shell: preloader, cursor, particles, navbar, search, notifications, theme
    ├── assets/
    │   └── style.css     ← Full style_premium.css (Black + Gold brand theme)
    ├── router/
    │   └── index.js      ← All routes mapped to views
    ├── composables/
    │   └── useAnimations.js  ← useScrollReveal(), useCounters(), useCountdown()
    ├── components/
    │   └── AppFooter.vue ← Shared footer
    └── views/
        ├── HomeView.vue      → /
        ├── AboutView.vue     → /about
        ├── EventsView.vue    → /events
        ├── StudyView.vue     → /study
        ├── TeamsView.vue     → /teams
        ├── GalleryView.vue   → /gallery
        ├── MeetupsView.vue   → /meetups
        ├── CommunityView.vue → /community
        ├── ContactView.vue   → /contact
        ├── SocialView.vue    → /social
        └── LoginView.vue     → /members
```

---

## ⚡ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy your assets into public/
# From your old project:
cp -r /path/to/old/assets ./public/assets
cp -r /path/to/old/teams  ./public/teams

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

---

## ✅ What's Migrated

- ✅ Full Black + Gold brand CSS (all animations, transitions, themes)  
- ✅ Preloader with orbiting text ring + progress bar  
- ✅ Custom cursor (dot + ring with hover expand)  
- ✅ Floating particles background  
- ✅ Navbar: scroll effect, mobile hamburger, active links via router  
- ✅ Search overlay (Ctrl+K) with page search  
- ✅ Notifications panel with mark-read  
- ✅ Dark/light theme toggle (persisted in localStorage)  
- ✅ Scroll reveal animations (.rs / .rc classes)  
- ✅ Counter animations (data-count)  
- ✅ Countdown timers  
- ✅ Hero scroll canvas animation (frame-based)  
- ✅ All 10 pages: Home, About, Events, Study, Teams, Gallery, Meetups, Community, Contact, Social, Members Login  
- ✅ Filter tabs (Events, Study, Gallery, Community)  
- ✅ Gallery lightbox  
- ✅ Contact form  
- ✅ Page transitions (fade)  
- ✅ Back to top button  
