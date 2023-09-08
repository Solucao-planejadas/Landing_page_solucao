<template>

  <div class="container">


    <div class="table-responsive" >

      <table class=" table  table-bordered table-hover  ">
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
            <button class="btn btn-primary">
              Editar
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>

  </div>







</template>


<script>
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            tipo: "Mamaco",
            nome: "Mamaco.png",
            dtUpdate: "2004-03-17"
          },{
            id: 1,
            tipo: "Mamaco",
            nome: "Mamaco.png",
            dtUpdate: "2004-03-17"
          },{
            id: 1,
            tipo: "Mamaco",
            nome: "Mamaco.png",
            dtUpdate: "2004-03-17"
          },{
            id: 1,
            tipo: "Mamaco",
            nome: "Mamaco.png",
            dtUpdate: "2004-03-17"
          },{
            id: 1,
            tipo: "Mamaco",
            nome: "Mamaco.png",
            dtUpdate: "2004-03-17"
          },{
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