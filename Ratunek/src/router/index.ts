import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmergencyBackpackView from '../views/EmergencyBackpackView.vue'
import AlarmSirensView from '../views/AlarmSirensView.vue'
import SheltersView from '../views/SheltersView.vue'
import EvacuationRoutesView from '../views/EvacuationRoutesView.vue'
import FirstAidView from '../views/FirstAidView.vue'
import RCBAlertsView from '../views/RCBAlertsView.vue'
import SOSoundView from '../views/SOSoundView.vue'
import CrisisView from '../views/CrisisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/backpack',
      name: 'backpack',
      component: EmergencyBackpackView,
    },
    {
      path: '/alarm-sirens',
      name: 'alarm-sirens',
      component: AlarmSirensView,
    },
    {
      path: '/shelters',
      name: 'shelters',
      component: SheltersView,
    },
    {
      path: '/evacuation-routes',
      name: 'evacuation-routes',
      component: EvacuationRoutesView,
    },
    {
      path: '/first-aid',
      name: 'first-aid',
      component: FirstAidView,
    },
    {
      path: '/rcb-alerts',
      name: 'rcb-alerts',
      component: RCBAlertsView,
    },
    {
      path: '/so-sound',
      name: 'so-sound',
      component: SOSoundView,
    },
    {
      path: '/crisis',
      name: 'crisis',
      component: CrisisView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
