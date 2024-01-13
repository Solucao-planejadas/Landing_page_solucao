<template>
  <NavBar v-if="validatePathLandingPage()" :buttons="buttons" :logo="logo" />

  <NavBar v-if="validatePathAdminPage()" :buttons="adminButtons" :logo="logo" :not-transparent="true" />

  <router-view />

  <RodapeComponent v-if="validatePathLandingPage()" :buttons="buttons" :midias="midias" :contatos="contato" />
</template>

<script>
import logo from "@/assets/logo.png";
import NavBar from "@/components/NavBar.vue";
import RodapeComponent from "@/components/RodapeComponent.vue";
import { router } from "@/router";

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
        }
      ],
      midias: [
        {
          page: "WhatsApp",
          id: "Whats",
          href: 'https://api.whatsapp.com/message/A4EPT34G2MEZF1?autoload=1&app_absent=0'
        }, {
          page: "Instagram",
          id: "Instagram",
          href: 'https://www.instagram.com/solucoes_planejadas/'
        }, {
          page: "Facebook",
          id: "face",
          href: 'https://www.facebook.com/solucoesplanejadas.com.br'
        }, {
          page: "E-mail",
          id: "email",
          href: 'mailto:Solucoesplanejadas@gmail.com'
        },
      ],
      contato: [
        {
          page: "WhatsApp",
          id: "Whats",
          href: 'https://api.whatsapp.com/message/A4EPT34G2MEZF1?autoload=1&app_absent=0'
        }, {
          page: "E-mail",
          id: "email",
          href: 'mailto:Solucoesplanejadas@gmail.com'
        }, {
          page: "(11) 2667-6049",
          id: "Fixo",
          href: '(11) 2667-6049'
        },
        {
          page: "(11) 96571-3881",
          id: "telefone",
          href: '(11) 96571-3881'
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
      if (this.currentPage === undefined) this.currentPage = this.$route.path
      return this.currentPage === '/' || this.currentPage === '/produtos'
    },
    validatePathAdminPage() {
      if (this.currentPage === undefined) this.currentPage = this.$route.path
      return this.currentPage.toLowerCase() === '/gallery'
    },
  },
  created() {
    router.beforeEach((to) => {
      this.currentPage = to.path
      this.validatePathLandingPage()
      this.validatePathAdminPage()
    })
  },
  watch: {
    '$route'() {
      this.validatePathLandingPage()
      this.validatePathAdminPage()
    }
  }
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
