import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projets from "@/components/Projects.vue";
import CV from "@/components/Cv.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projets,
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;