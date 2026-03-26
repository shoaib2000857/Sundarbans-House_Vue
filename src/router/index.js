import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Events from '../views/EventsView.vue'
import Study from '../views/StudyView.vue'
import Teams from '../views/TeamsView.vue'
import Gallery from '../views/GalleryView.vue'
import Meetups from '../views/MeetupsView.vue'
import Community from '../views/CommunityView.vue'
import Contact from '../views/ContactView.vue'
import Social from '../views/SocialView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/study', component: Study },
  { path: '/teams', component: Teams },
  { path: '/gallery', component: Gallery },
  { path: '/meetups', component: Meetups },
  { path: '/community', component: Community },
  { path: '/contact', component: Contact },
  { path: '/social', component: Social },
  { path: '/members', component: Login },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
