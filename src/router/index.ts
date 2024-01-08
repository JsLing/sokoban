import { createRouter, createWebHashHistory } from "vue-router";
import Edit from "../view/Edit.vue";
import Game from "../view/Game.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "game",
    },
    {
      path: "/game",
      name: "game",
      component: Game,
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit,
    },
  ],
});
