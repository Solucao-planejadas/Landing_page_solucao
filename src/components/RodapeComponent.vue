<template>
    <footer class="mt-12 text-light d-flex flex-column"
            style="background-color: #002754"
    >
        <div class="container py-5 d-flex justify-center align-center">
            <div class="row gap-3">

                <div class="col">
                    <ul class="flex-column">
                        <p class="h4">Soluções Planejadas</p>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"
                                v-for="button in buttons"
                                v-bind:key="button.id">
                                <button class="nav-link" @click="scrollTo(button.id)">
                                    {{ button.page }}
                                </button>
                            </li>
                        </ul>
                    </ul>
                </div>

                <div class="col">
                    <ul class="flex-column">
                        <p class="h4">Redes Sociais</p>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"
                                v-for="button in buttons"
                                v-bind:key="button.id">
                                <button class="nav-link" @click="scrollTo(button.id)">
                                    {{ button.page }}
                                </button>
                            </li>
                        </ul>
                    </ul>
                </div>

                <div class="col">
                    <ul class="flex-column">
                        <p class="h4">Contatos</p>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"
                                v-for="button in buttons"
                                v-bind:key="button.id">
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
            <br/>
            Desenvolvido Por <a href="https://github.com/Solucao-planejadas" target="_blank">Sniggers</a>
        </div>
    </footer>
</template>

<script>
import {router} from "@/router";
import {vuetify} from "@/plugins";

export default {
    name: "RodapeComponent",
    computed: {
        vuetify() {
            return vuetify
        }
    },
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
