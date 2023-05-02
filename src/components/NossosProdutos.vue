<template>
  <div class="masthead">
    <div class="container px-4 px-lg-5 h-100">
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-8 align-self-end">
          <h1 class="text-white font-weight-light">NOSSOS PRODUTOS</h1>
          <hr class="divider" />
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white-75 mb-5 description">
            Confira nosso catálogo de projetos já desenvolvidos!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NossosProdutos",
};
</script>

<style scoped>
.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(
      to bottom,
      rgba(92, 77, 66, 0.8) 0%,
      rgba(92, 77, 66, 0.8) 100%
    ),
    url("@/assets/img/mesa.jpg") no-repeat scroll center;
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
