import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes',
      name: 'NoteIndex',
      component: () => import('../views/notes/NoteIndex.vue')
    },
    {
      path: '/notes/create',
      name: 'NoteCreate',
      component: () => import('../views/notes/NoteCreate.vue')
    },
    {
      path: '/notes/edit/:id',
      name: 'NoteEdit',
      component: () => import('../views/notes/NoteEdit.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue'),
      props: true,
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/Register.vue'),
      props: true,
    },

  ]
})

export default router
