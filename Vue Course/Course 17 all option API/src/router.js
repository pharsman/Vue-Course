import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
// import CoachRegistation from './pages/coaches/CoachRegistation.vue'
// import ContactCoach from './pages/request/ContactCoach.vue'
// import RequestReceived from './pages/request/RequestReceived.vue'
// import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index.js'

const CoachDetail = defineAsyncComponent(() => import('./pages/coaches/CoachDetail.vue'))
const CoachRegistation = defineAsyncComponent(() => import('./pages/coaches/CoachRegistation.vue'))
const ContactCoach = defineAsyncComponent(() => import('./pages/request/ContactCoach.vue'))
const RequestReceived = defineAsyncComponent(() => import('./pages/request/RequestReceived.vue'))
const UserAuth = defineAsyncComponent(() => import('./pages/auth/UserAuth.vue'))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach
        }]
    },
    {
      path: '/register',
      component: CoachRegistation,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests',
      component: RequestReceived,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauth: true
      }
    },
    {
      path: '/:notFount(.*)',
      component: NotFound
    },
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches')
  } else {
    next()
  }
})

export default router
