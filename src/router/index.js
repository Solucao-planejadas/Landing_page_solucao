import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "../views/HomePage.vue";
import ProdutosScreen from "../views/ProdutosScreen.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "HomeScreen",
        component: HomeScreen,
    },
    {
        path: "/produtos",
        name: "ProdutosScreen",
        component: ProdutosScreen
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})