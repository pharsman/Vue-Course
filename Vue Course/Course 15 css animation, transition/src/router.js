import { createWebHistory, createRouter } from "vue-router";
import AllUsers from './components/pages/AllUsers.vue'
import CoutseGoals from './components/pages/CoutseGoals.vue'


const routes = [
  {
    path: "/",
    component: AllUsers,
  },
  {
    path: "/goals",
    component: CoutseGoals,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
