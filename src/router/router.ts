import { createRouter, createWebHistory } from "vue-router";
import PlanetList from "../pages/PlanetList.vue";
import DemoPage from "../pages/DemoPage.vue";

const routes = [
  { path: "/", component: PlanetList },
  { path: "/demo", component: DemoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
