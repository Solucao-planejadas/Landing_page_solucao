<template>
    <HeadComponent/>
    <SobreNos id="sobreNos"/>
    <div class="container">

        <Carousel class="mb-10" id="Projetos"/>
        <CardComponent :cards="cards"/>

        <FormComponent/>
        
        <MidiasSociais/>

    </div>

</template>

<script>

import HeadComponent from "@/components/HeadComponent.vue";
import SobreNos from "@/components/SobreNos.vue";
import Carousel from "@/components/CarouselComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import MidiasSociais from "@/components/MidiasSociais.vue";

export default {
    name: "HomePage",
    components: {FormComponent, CardComponent, Carousel, SobreNos, HeadComponent,MidiasSociais},
    data() {
        return {
            cards: [
                {
                    title: "teste",
                    src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                },{
                    title: "teste",
                    src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                },{
                    title: "teste",
                    src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                },
            ],
        }
    }
}
</script>