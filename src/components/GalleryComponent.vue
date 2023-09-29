<template>
  <div class="container-fluid mt-16 p-1">

    <div class="p-2 text-right">
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Cadastrar
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover table-light">
        <thead>
        <tr class="">
          <th scope="col" class="col-md-2">#</th>
          <th scope="col" class="col-md-2">Tipo</th>
          <th scope="col" class="col-md-2">Nome</th>
          <th scope="col" class="col-md-2">Data de Modificação</th>
          <th scope="col" class="col-md-2">Options</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.tipo }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.dtUpdate }}</td>
          <td class="d-flex justify-content-center align gap-2">
            <button class="btn btn-danger">
              Delete
            </button>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Editar
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>

  </div>

  <ModalGallery />

</template>


<script>
import ModalGallery from "@/components/ModalGallery.vue";

export default {
  components: {ModalGallery},
  data() {
    return {
      items: [
        {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        }, {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        }, {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        }, {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        }, {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        }, {
          id: 1,
          tipo: "Mamaco",
          nome: "Mamaco.png",
          dtUpdate: "2004-03-17"
        },
      ]
    }
  }
}
</script>


<style scoped>
</style>