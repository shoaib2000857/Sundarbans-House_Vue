import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Events from '../views/EventsView.vue'
import Study from '../views/StudyView.vue'
import Teams from '../views/TeamsView.vue'
import Meetups from '../views/MeetupsView.vue'
import Community from '../views/CommunityView.vue'
import Contact from '../views/ContactView.vue'
import Login from '../views/LoginView.vue'
import MembersLounge from '../views/MembersLoungeView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/study', component: Study },
  { path: '/teams', component: Teams },
  { path: '/meetups', component: Meetups },
  { path: '/community', component: Community },
  { path: '/contact', component: Contact },
  { path: '/members', component: Login },
  { 
    path: '/lounge', 
    component: MembersLounge,
    meta: { requiresAuth: true }
  },
  { 
    path: '/dashboard', 
    component: DashboardView,
    meta: { requiresAuth: true }
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('sundarbans_auth_token')
    if (token) {
      next()
    } else {
      next('/members')
    }
  } else {
    next()
  }
})
