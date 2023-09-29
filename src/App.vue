<template>
  <NavBar
    v-if="validatePathLandingPage()"
    :buttons="buttons"
    :logo="logo"
  />

  <NavBar
    v-if="validatePathAdminPage()"
    :buttons="adminButtons"
    :logo="logo"
    :not-transparent="true"
  />

  <router-view />

  <RodapeComponent
          v-if="validatePathLandingPage()"
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
      adminButtons: [
        {
          page: "Home",
          id: "home",
        },
      ]
    };
  },
  methods: {
    validatePathLandingPage() {
      if (this.currentPage === undefined) this.currentPage = window.location.pathname
      return this.currentPage === '/' || this.currentPage === '/produtos'
    },
    validatePathAdminPage() {
      if (this.currentPage === undefined) this.currentPage = window.location.pathname
      return this.currentPage === '/gallery'
    }
  },
  mounted() {
    this.currentPage = window.location.pathname
    console.log(this.currentPage)
  }
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
