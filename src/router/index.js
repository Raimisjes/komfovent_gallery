import { createRouter, createWebHistory } from 'vue-router'
import GalleryGrid from '../views/GalleryGrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: GalleryGrid,
    },
  ],
})

export default router
