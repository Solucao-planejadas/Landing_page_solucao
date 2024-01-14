<template>
  <div class="modal fade" :id="'productCard' + modalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="productCardLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="productCardLabel">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">




          <div>
            <p class="font-weight-bold mb-3">Fotos: </p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div v-for="(image, index) in images" class="col" :key="index">
                <div class="card">
                  <img :src="image.itemFileName" class="card-img-top" :alt="title">
                </div>
              </div>

            </div>
          </div>
          <hr class="mt-4 mb-4">
          <div class="row row-cols-1 row-cols-md-12 g-4">

            <div>
              <p class="font-weight-bold">Descrição: </p>
              <div class="mt-3 mb-3" v-html="description">

              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ModalProdutosCard',
  data() {
    return {
      images: [],
    }
  },
  async mounted() {
    await this.getImages()
  },
  methods: {
    getImages() {
      axios.get(`/gallery/${this.modalId}`)
        .then(response => {
          this.images = response.data.gallery
        })
        .catch(err => {
          console.log(err)
          return [];
        })
    }
  },
  props: {
    modalId: {
      type: Number,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped></style>