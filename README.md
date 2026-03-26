Sundarbans-House
A centralized platform for managing events, resources, team collaboration, and digital initiatives of Sundarbans House.

<img width="1427" height="798" alt="Screenshot 2026-03-26 at 23 36 19" src="https://github.com/user-attachments/assets/2e70eb26-ce9e-4eb8-a498-d184e905301b" />

<img width="1470" height="470" alt="Screenshot 2026-03-26 at 23 43 59" src="https://github.com/user-attachments/assets/22307785-dffc-403b-8264-a64838d91c6b" />



Structure

```
sundarbans-vue/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/          
│       └── teams/      
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
