<template>
    <div class="masthead">
        <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-8 align-self-end">
                    <h1 class="text-white font-weight-bold">Estamos á disposição para atender seu pedido</h1>
                    <hr class="divider" />
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 mb-5 description mt-2">Conte
                        conosco
                        para proporcionar um serviço de qualidade e eficiência, buscando sempre superar suas expectativas.
                        Estamos prontos para atendê-lo com dedicação e profissionalismo. Se precisar de alguma assistência
                        adicional, não hesite em entrar em contato. Estamos aqui para ajudar!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeadComponent"
}
</script>

<style scoped>
.masthead {
    padding-top: 10rem;
    padding-bottom: calc(10rem - 4.5rem);
    background: linear-gradient(to bottom, rgba(0, 140, 255, 0.685) 0%,
            rgba(21, 236, 218, 0) 100%), url("@/assets/img/imgCapa/img-capa2.jpg") no-repeat scroll center;
    background-size: cover;
}

.description {
    color: var(--secodary-gray);
}

@media (min-width: 992px) {
    .masthead {
        height: 100vh;
        min-height: 40rem;
        padding-top: 4.5rem;
        padding-bottom: 0;
    }

    .masthead p {
        font-size: 1.15rem;
        transform: translateY(-20%);
        transition: all 0.5s ease;
    }

    .masthead h1 {
        transform: translateY(-10%);
        transition: all 0.5s ease;
        font-size: 3rem;
    }
}

@media (min-width: 1200px) {

    .masthead h1 {
        transform: translateY(-10%);
        transition: all 0.5s ease;
        font-size: 3.5rem;
    }
}
</style>