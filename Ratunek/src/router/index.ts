import { createRouter, createWebHistory } from 'vue-router'
import EmergencyBackpackView from '../views/EmergencyBackpackView.vue'
import AlarmSirensView from '../views/AlarmSirensView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmergencyBackpackView,
    },
    {
      path: '/alarm-sirens',
      name: 'alarm-sirens',
      component: AlarmSirensView,
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
