<template>
  <NavBar
    v-if="currentPage === '/' || currentPage === '/produtos'"
    :buttons="buttons"
    :logo="logo"
  />
  <router-view />

  <RodapeComponent
          v-if="currentPage === '/' || currentPage === '/produtos'"
          :buttons="buttons"
  />
</template>

<script>
import logo from "@/assets/logo.png";
import NavBar from "@/components/NavBar.vue";
import RodapeComponent from "@/components/RodapeComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    RodapeComponent,
  },
  data() {
    return {
      currentPage: window.location.pathname,
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
        },
        {
          page: "Produtos",
          id: "produtos",
        },
      ],
    };
  },
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
