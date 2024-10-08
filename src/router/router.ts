import { createRouter, createWebHistory } from "vue-router";
import PlanetList from "../pages/PlanetList.vue";
import DemoPage from "../pages/DemoPage.vue";
import ButterForm from "../pages/ButterForm.vue";
import ButterList from "../pages/ButterList.vue";

const routes = [
  { path: "/", component: PlanetList },
  { path: "/demo", component: DemoPage },
  {
    path: "/butter",
    children: [
      {
        path: "",
        component: ButterList,
      },
      {
        path: "create",
        component: ButterForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
