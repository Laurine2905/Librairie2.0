import { createRouter, createWebHistory } from "vue-router";
import Livre from "../component/Livre.vue";
import LivreAchat from "../component/LivreAchat.vue";
import LivreSearch from "../component/LivreSearch.vue";
import LivreStock from "../component/LivreStock.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: "/",
      name: "livres",
      component: Livre
    },
    {
      path: "/achats",
      name: "achats",
      component: LivreAchat
    },
    {
      path: "/search",
      name: "rechercher",
      component: LivreSearch
    },
    {
      path: "/stock",
      name: "stock",
      component: LivreStock
    }
  ]
});

export default router;
