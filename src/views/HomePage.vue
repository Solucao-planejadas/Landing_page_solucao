<template>
  <HeadComponent />

  <SobreNos id="sobreNos" />

  <div class="container">
    <div class="gap-3">
      <div class="row mt-12">
        <Carousel id="Projetos" />
      </div>

      <div class="row mt-12">
        <CardComponent :cards="cards" />
      </div>

      <div class="row mt-12">
        <FormComponent />
      </div>

      <div class="row mt-12">
        <MidiasSociais />
      </div>

      <CarouselEmpresas class="mt-12" />


    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import SobreNos from "@/components/SobreNos.vue";
import Carousel from "@/components/CarouselComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import MidiasSociais from "@/components/MidiasSociais.vue";
import CarouselEmpresas from "@/components/CarouselEmpresas.vue";

export default {
  name: "HomePage",
  components: {
    HeadComponent,
    SobreNos,
    Carousel,
    CardComponent,
    FormComponent,
    MidiasSociais,
    CarouselEmpresas,
  },
  data() {
    return {
      cards: [
        {
          title: "Cadeirão para Bebês (3 Lugares)",
          src: "https://lh3.googleusercontent.com/pw/ABLVV87mYGNTDU-NnBMz4XRWLMt__Uko6WNKa4Xp38ZN-2bFFO1jMwfKWLHTCuOsI-67uDxUp00wO6TJ36VPjZcxL38sTRx4BN3lTvQ29q8xkVvDbiEqqXvc7hc4ciE0xdQSjGxlg3-CNu3Ea1VbUmr77WVsVg=w1654-h931-s-no-gm?authuser=0",
          text: "Encosto e assento em tecido impermeável Cinto de Segurança de proteção com trava Acabamento de Tampo boleado MDF Branco TX 18 mm A: 900 mm x L: 1500 mm x P: 590 mm",
        },
        {
          title: "Armário Digital",
          src: "https://lh3.googleusercontent.com/pw/ABLVV869cF96DABL5Pe2HqyiEg-rKTc1D-UUFJiP3O0PnNsoSU5dto3sI8XCdxTc6CQdxx-biJ0Ojv2LFWveLgLBezMmVoSrbzaROSU7amRG3M-1yfnisnKuUxxRWnYkYwDA7a_3lYH1ggNi1fsJiGF0CWVnqQ=w789-h801-s-no-gm?authuser=0",
          text: "Porta de Giro de acabamento Reto Prateleira deslizante p/ Teclado USB Divisões Internas Acompanha Fechadura e Chaves Dobradiças - Puxador Haste Fixo na parede. MDF Branco TX 15/18mm A: 640 mm x L: 600 mm x P: 400 mm",
        },
        {
          title: "Ateliê Material Pedagógico Coletivo",
          src: "https://lh3.googleusercontent.com/pw/ABLVV84ZFXbcyAQKIQ3iMM-K_zCE4DCPS7wdKuR3m1C2Vrx28qeAor0yd2DPGPgXl79k1gx3AGkywkuUcXbJa969H80V_b1yIePq0WHWOVbPnXxq3x7djg3ebCopXAo-M49a5S8Wkck8FxUP9PhDwSKkfN28sQ=w500-h500-s-no-gm?authuser=0",
          text: "Prateleiras e Divisórias Internas 5 Nichos no tampo superior Rodízios reforçados MDF Branco TX 18 mm L: 800 mm A: 700 mm P: 550 mm ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products {
  background: var(--tertiary-gray);
}

.btn {
  background: var(--primary-color);
  color: var(--white-color);
}
</style>