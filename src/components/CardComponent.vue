<template>
  <div class="products gap-3">
    <div class="row">
      <div class="col-sm-4 mb-3" v-for="(card, index) in cards" v-bind:key="card.title">
        <div class="card h-100 w-100">
          <img :src="card.src" class="card-img-top img-fluid object-fit-contain" :alt="card.title" style="height: 20rem;" />
          <div class="card-body">

            <div>
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="d-none">{{ index }}</p>
            </div>


            <div class="d-flex justify-content-between align-center gap-2">
              <button class="btn btn-sm" @click="$router.push('/produtos')">
                Ver coleção
              </button>

              <div v-if="showCollapse">
                <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'#collapse' + index">
                  Leia Mais
                </button>
              </div>
            </div>

            <div class="collapse p-3" :id="'collapse' + index">
              <div class="">
                {{ card.text }}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    cards: {
      required: true,
      type: Array,
    },
    showCollapse: {
      required: false,
      default: true,
      type: Boolean,
    },
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
