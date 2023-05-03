<template>
    <nav
        class="navbar navbar-expand-lg fixed-top"
        :class="{ scrolled: hasScrolled }"
    >
        <div class="container">
            <a class="navbar-brand" href="#">
                <img :src="logo" alt="..." height="36" />
            </a>
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
            <div
                class="collapse navbar-collapse justify-content-between flex-grow-0"
                id="navbarSupportedContent"
            >
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
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        logo: {
            required: true,
            type: String,
        },
        buttons: {
            required: true,
            type: Array,
        },
    },
    data() {
        return {
            hasScrolled: false,
            isMenuActive: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        document
            .querySelector(".navbar-toggler")
            .addEventListener("click", this.handleClick);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        document
            .querySelector(".navbar-toggler")
            .removeEventListener("click", this.handleClick);
    },
    methods: {
        scrollTo(id) {
            document
                .getElementById(id)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
        },

        handleScroll() {
            if (window.scrollY > 0) {
                this.hasScrolled = true;
            } else {
                this.hasScrolled = this.isMenuActive;
            }
        },
        handleClick() {

            this.isMenuActive = !this.isMenuActive;

            if (window.scrollY === 0) {

                this.hasScrolled = this.isMenuActive;
            } else {
                if (window.scrollY > 0) {
                    this.hasScrolled = true;
                } else {
                    this.isMenuActive = true;
                }
            }
        },
    },
};
</script>

<style scoped>
.navbar {
    background: transparent;
}

.scrolled {
    background: var(--tertiary-color);
    transition: background-color 0.5s ease-in-out;
}

.nav-link {
    color: var(--secodary-gray);
}

.nav-link:hover {
    color: var(--quaternary-gray);
}

</style>
