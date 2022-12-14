import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/o-firmie",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/hobby-szefa",
      name: "hobby",
      component: () => import("../views/HobbyView.vue"),
    },
    {
      path: "/uslugi",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/realizacje",
      name: "porfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/nasi-fachowcy",
      name: "team",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/pracownicy",
      name: "career",
      component: () => import("../views/CareerView.vue"),
    },
    {
      path: "/praktyka-zawodowa",
      name: "internship",
      component: () => import("../views/InternshipView.vue"),
    },
    {
      path: "/wycena",
      name: "estimation",
      component: () => import("../views/EstimationView.vue"),
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
