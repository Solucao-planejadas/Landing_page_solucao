<template>
  <div class="container mt-10" id="produtos">
    <nav class="d-flex justify-center">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">

        <div v-for="(button, index) in buttons" :key="button.type">
          <ButtonTabComponent
              :buttonName="button.type"
              :isButtonActive="index === 0"
              :contentData="contentData"
              :id="button.type"
          />
        </div>

      </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">

      <ProductsCardGroup
          v-for="(item, index) in contentData" :key="item.id"
          :content-data="item.albums"
          :nav="item.type"
          :aria-labelledby="item.type + '-tab'"
          :is-button-active="index === 0"
      />
    </div>

  </div>

</template>

<script>

import ButtonTabComponent from '@/components/ButtonTabComponent.vue';
import ProductsCardGroup from "@/components/ProductsCardGroup.vue";
import axios from "axios";

export default {
  name: "ProdutosComponent",
  components: {ProductsCardGroup, ButtonTabComponent},
  data: () => ({
    buttons: [],
    contentData: [],
  }),
  async mounted() {
    await this.getAlbums()
  },
  methods: {
    async getAlbums() {
      axios.get('/byType')
          .then(response => {
            this.contentData = response.data.gallery
            this.buttons = response.data.gallery
          })
          .catch(err => {
            console.log(err)
            return [];
          })
    }
  }
};
</script>

<style scoped>
* {
  transition: all 0.3s ease-in;;
}
</style>
