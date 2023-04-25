<template>
    <NavBar :buttons="buttons"/>
    <router-view/>
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
    name: 'App',
    components: {
        NavBar
    },
    data() {
        return {
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
</style>
