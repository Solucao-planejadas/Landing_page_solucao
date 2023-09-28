<template>

  <div class="container">


    <div class="table-responsive">

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
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Editar
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>

  </div>


  <!--  &lt;!&ndash; Button trigger modal &ndash;&gt;-->
  <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
  <!--    Launch demo modal-->
  <!--  </button>-->

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Card Numero 1</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">


          <div>

            <div>

              <label class="form-label" for="">Tipo</label>
              <input class="form-control" type="text" name="" id="">

            </div>

            <div>

              <label class="form-label" for="">Nome</label>
              <input class="form-control" type="text" name="" id="">

            </div>

            <div>

              <label class="form-label" for="">Data de Modificação</label>
              <input class="form-control" type="date" name="" id="" disabled>


            </div>

            <div>

              <label for="exampleFormControlTextarea1" class="form-label">Texto</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>


          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile">
          </div>

          <div class="d-flex flex-wrap justify-content-center">

            <div class="card m-3" style="width: 18rem;">
              <img src="../assets/img/img-02.png" class="card-img-top border-bottom border-2 border-black" alt="">
              <div class="card-body d-grid gap-2">


                <button class="btn btn-outline-danger">
                  Deletar
                </button>
              </div>
            </div>


          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sair</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
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