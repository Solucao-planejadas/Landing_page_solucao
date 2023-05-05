<template>
  <NossosProdutos />
  <div class="container">
    <ProdutosComponent />
  </div>
</template>

<script>
import NossosProdutos from "@/components/NossosProdutos.vue";
import ProdutosComponent from "@/components/ProdutosComponent.vue";

export default {
  name: "ProdutosScreen",
  components: { NossosProdutos,ProdutosComponent},
  data() {
    return {
      cards: [
        {
          title: "teste",
          src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "teste",
          src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "teste",
          src: "https://media.gazetadopovo.com.br/2022/03/02151626/dicas-moveis-planejados-evivva-cozinha-960x540.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
