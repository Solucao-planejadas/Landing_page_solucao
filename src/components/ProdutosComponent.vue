<template>
  <div class="container mt-10">
    <nav class="d-flex justify-center">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">

        <div v-for="button in buttons" :key="button.buttonName">
          <ButtonTabComponent :buttonName="button.buttonName" :isButtonActive="button.isButtonActive" />
        </div>

      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-pronta-entrega" role="tabpanel"
        aria-labelledby="nav-pronta-entrega-tab">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ButtonTabComponent from '@/components/ButtonTabComponent.vue';

export default {
  name: "ProdutosComponent",
  components: { ButtonTabComponent },
  data: () => ({
    buttons: [
      { buttonName: 'PRONTA-ENTREGA', isButtonActive: true },
      { buttonName: 'SOB-MEDIDA', isButtonActive: false },
    ]
  }),
};
</script>
