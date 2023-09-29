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
          <p>{{ modalId }}</p>

          <div class="row row-cols-1 row-cols-md-2 g-4">

            <div v-for="(image, index) in images" class="col" :key="index">
              <div class="card">
                <img :src="image" class="card-img-top" :alt="title">
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
export default {
  name: 'ModalProdutosCard',
  props: {
    modalId: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    images: {
      require: true
    }
  }
}
</script>

<style scoped>

</style>