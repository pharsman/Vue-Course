import { createWebHistory, createRouter } from "vue-router";
import UsersList from "./Components/pages/UsersList.vue";
import TeamsList from "./Components/pages/TeamsList.vue";
import TeamMembers from "./Components/teams/TeamMembers.vue";
import NotFound from "./Components/pages/NotFound.vue"
import TeamsFooter from "./Components/pages/TeamsFooter.vue"
import UsersFooter from "./Components/pages/UsersFooter.vue"

const routes = [
  {
    path: "/",

    redirect: '/teams'
  },
  {
    path: "/teams",
    name: "teams",
    meta: { needsAuth: true },
    components: {
      default: TeamsList,
      footer: TeamsFooter
    },
    children: [
      {
        path: ':teamId',
        name: 'team-members',
        component: TeamMembers,
        // props: true,
      }
    ],
    // alias: '/',
  },
  {
    path: "/users",
    name: "users",
    components: {
      default: UsersList,
      footer: UsersFooter
    },
    beforeEnter(to, from, next) {
      console.log('users beforeEnter')
      console.log(to, from)
      next()
    }
  },

  {
    path: '/:notFound(.*)',
    name: 'not-found',
    component: NotFound,
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach')
  console.log('to,from')
  // if (to.meta.needsAuth) {
  //   console.log('Needs auth!')
  //   next()
  // } else {
  //   next()
  // }
  // if (to.name === 'team-members') {
  //   next()
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } })
  // }
  next()
})

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach')
  console.log(to, from)
})

export default router;
