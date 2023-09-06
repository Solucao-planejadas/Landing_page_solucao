import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "../views/HomePage.vue";
import ProdutosScreen from "../views/ProdutosScreen.vue";
import NotFound from "../components/NotFound.vue";
import LoginPage from "@/views/LoginPage.vue";
import DashComponent from "@/components/DashComponent.vue";
import store from "@/store";

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
    {
        path: "/dash",
        name: "DashComponent",
        component: DashComponent,
        meta: {requiresAuth: true},
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next('/login')
    } else {
        next()
    }
})