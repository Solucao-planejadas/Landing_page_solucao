<template>
  <NavBar v-if="currentPage === '/' || currentPage === '/produtos'" />
  <footer class="mt-12 text-light" style="background-color: #002754">
    <div class="container py-3">
      <!-- <div class="d-flex juustify-content-center"> -->
        <div class="row">

          <div class="col col-lg-2">
            <ul class="flex-column">
              <p class="h4">Soluções Planejadas</p>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul
                class="navbar-nav ms-auto"
                v-for="button in buttons"
                v-bind:key="button.id"
              >
                <li class="nav-item">
                  <button class="nav-link" @click="scrollTo(button.id)">
                    {{ button.page }}
                  </button>
                </li>
              </ul>
            </ul>
          </div>

          <div class="col col-lg-2">
            <ul class="flex-column">
              <p class="h4 text-gray">Redes Sociais</p>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul
                class="navbar-nav ms-auto"
                v-for="button in buttons"
                v-bind:key="button.id"
              >
                <li class="nav-item">
                  <button class="nav-link" @click="scrollTo(button.id)">
                    {{ button.page }}
                  </button>
                </li>
              </ul>
            </ul>
          </div>

          <div class="col col-lg-2">
            <ul class="flex-column">
              <p class="h4">Contatos</p>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul
                class="navbar-nav ms-auto"
                v-for="button in buttons"
                v-bind:key="button.id"
              >
                <li class="nav-item">
                  <button class="nav-link" @click="scrollTo(button.id)">
                    {{ button.page }}
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-2" style="background-color: #05346b">
        Copyright©2023, Soluções Planejadas. Todos os direitos reservados.
        <br />
        Desenvolvido Por <a href="https://github.com/Solucao-planejadas" target="_blank" >Sniggers</a>
      </div>
    <!-- </div> -->
  </footer>
</template>

<script>
import { router } from "@/router";

export default {
  name: "RodapeComponent",
  props: {
    buttons: Array,
  },

  scrollTo(id) {
    try {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } catch (err) {
      this.currentPage = window.location.pathname;

      if (this.currentPage === "/produtos") {
        router.push(`/#${id}`);
      } else if (this.currentPage === "/") {
        router.push(`/produtos`);
        setTimeout(() => {
          document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }, 100);
      }
    }
  },
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
