<template>
    <NavBar :buttons="buttons" :logo="logo"/>
    <router-view/>
</template>

<script>

import logo from "@/assets/logo.png";
import NavBar from "@/components/NavBar.vue";

export default {
    name: 'App',
    components: {
        NavBar
    },
    data() {
        return {
            logo: logo,
            buttons: [
                {
                    page: "Sobre Nós",
                    id: "sobreNos",
                },
                {
                    page: "Projetos",
                    id: "Projetos",
                },
                {
                    page: "Orçamento",
                    id: "orcamento",
                },
                {
                    page: "Redes Sociais",
                    id: "redesSociais",
                }
            ]
        };
    }
}
</script>

<style>
@import "@/assets/css/main.css";
#app {
    min-height: 200vh;
}
</style>
