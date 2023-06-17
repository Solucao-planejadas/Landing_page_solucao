import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "../views/HomePage.vue";
import ProdutosScreen from "../views/ProdutosScreen.vue";
import NotFound from "../../../../EQ/landing_page/src/components/NotFound.vue";
import LoginPage from "@/views/LoginPage.vue";
import { store } from "@/store";

const routes = [
    {
        path: "/",
        name: "HomeScreen",
        component: HomeScreen,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: "/produtos",
        name: "ProdutosScreen",
        component: ProdutosScreen
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;

    console.log(to.meta)
    console.log(to.meta.requiresAuth)
    console.log(isAuthenticated)

    if (to.meta.requiresAuth && !isAuthenticated) {
        if (await store.dispatch('checkAuthentication')) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})