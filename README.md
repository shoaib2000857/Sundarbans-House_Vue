Sundarbans-House
A centralized platform for managing events, resources, team collaboration, and digital initiatives of Sundarbans House.

<img width="1432" height="783" alt="Screenshot 2026-04-02 at 10 53 46" src="https://github.com/user-attachments/assets/04fef05d-a7f3-4fe1-8ef9-20a104ec3600" />


<img width="1060" height="660" alt="Screenshot 2026-04-02 at 10 55 34" src="https://github.com/user-attachments/assets/eb5873b4-ba36-400d-8ff6-d162f89ffbeb" />

<img width="1470" height="728" alt="Screenshot 2026-04-02 at 10 57 30" src="https://github.com/user-attachments/assets/890ea9bb-9ed4-4cb8-b451-e50d6f2c563f" />

<img width="1352" height="685" alt="Screenshot 2026-04-02 at 10 59 07" src="https://github.com/user-attachments/assets/18ef2136-596a-470a-9ced-f9abae453d6f" />



Structure

```
sundarbans-vue/
├── index.html
├── vite.config.js
├── package.json
├── sundarbans
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

<img width="1470" height="470" alt="Screenshot 2026-03-26 at 23 43 59" src="https://github.com/user-attachments/assets/22307785-dffc-403b-8264-a64838d91c6b" />

