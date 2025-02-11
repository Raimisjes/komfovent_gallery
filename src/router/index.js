import { createRouter, createWebHistory } from 'vue-router'
import GalleryGrid from '../views/GalleryGrid.vue'
import ImageInfo from '../views/ImageInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: GalleryGrid,
    },
    {
      path: '/image',
      name: 'imageInfo',
      component: ImageInfo,
    },
  ],
})

export default router
