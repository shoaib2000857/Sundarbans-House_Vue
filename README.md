Sundarbans-House
A centralized platform for managing events, resources, team collaboration, and digital initiatives of Sundarbans House.


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

