import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projets from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Achievements from "@/components/Achievements.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-me',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projets,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;