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
import TechnicalView from '../views/TechnicalView.vue'
import CulturalView from '../views/CulturalView.vue'
import ESportsView from '../views/ESportsView.vue'

// Main pages
import Home from '@/views/Home.vue'
import Meetups from '@/views/Meetups.vue'

// Region meetup pages
import DelhiMeetups     from '@/views/meetups/DelhiMeetups.vue'
import MumbaiMeetups    from '@/views/meetups/MumbaiMeetups.vue'
import BangaloreMeetups from '@/views/meetups/BangaloreMeetups.vue'
import ChennaiMeetups   from '@/views/meetups/ChennaiMeetups.vue'
import KolkataMeetups   from '@/views/meetups/KolkataMeetups.vue'
import HyderabadMeetups from '@/views/meetups/HyderabadMeetups.vue'
import PatnaMeetups     from '@/views/meetups/PatnaMeetups.vue'
import ChandigarhMeetups from '@/views/meetups/ChandigarhMeetups.vue'

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
  { path: '/community/technical', component: TechnicalView },
  { path: '/community/cultural',  component: CulturalView  },
  { path: '/community/esports',   component: ESportsView   },

  { path: '/meetups',              component: Meetups },
  { path: '/meetups/delhi',        component: DelhiMeetups },
  { path: '/meetups/mumbai',       component: MumbaiMeetups },
  { path: '/meetups/bangalore',    component: BangaloreMeetups },
  { path: '/meetups/chennai',      component: ChennaiMeetups },
  { path: '/meetups/kolkata',      component: KolkataMeetups },
  { path: '/meetups/hyderabad',    component: HyderabadMeetups },
  { path: '/meetups/patna',        component: PatnaMeetups },
  { path: '/meetups/chandigarh',   component: ChandigarhMeetups },
  { path: '/meetups/pune',         component: PuneMeetups },
  
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
