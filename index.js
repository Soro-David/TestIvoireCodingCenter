import { createRouter, createWebHistory } from "vue-router";
import Accueil from "@/views/page/HomePage.vue";
import Connexion from "@/views/page/AboutPage.vue";
import LoginPage from "@/views/Auth/LoginPage.vue";
import InscriptionPage from "@/views/Auth/InscriptionPage.vue";
import ServicePage from "@/views/page/ServicePage.vue";
import PanierPage from "@/views/page/PanierPage.vue";

const routes = [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: InscriptionPage
    },
    {
      path: '/login',
      name: 'LoginPAge',
      component: LoginPage
    },
    {
      path: '/service',
      name: 'ServicePage',
      component: ServicePage
    },
    {
      path: '/panier',
      name: 'PanierPage',
      component: PanierPage
    }
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router