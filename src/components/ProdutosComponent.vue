<template>
    <div class="container">
        <v-card>
          <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab :value="1">Pronta-Entrega</v-tab>
            <v-tab :value="2">Sob-Medida</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item v-for="n in 3" :key="n" :value="n">
              <v-container fluid>
                <v-row>
                  <v-col v-for="i in 6" :key="i" cols="12" md="4">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
    </div>
</template>

<script>
  export default {
    name: "ProdutosComponent",
    data: () => ({
      tab: null,
    }),
  }
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
</style>