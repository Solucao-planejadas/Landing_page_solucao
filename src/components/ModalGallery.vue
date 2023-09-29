<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Produtos</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label" for="">Titulo</label>
            <input class="form-control" type="text" name="" id="">
          </div>
          <div class="mb-3">
            <label class="form-label" for="">Tipo de produto</label>
            <input class="form-control" type="text" name="" id="">
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Foto de capa</label>
            <input class="form-control" type="file" id="formFile">
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Fotos do produto</label>
            <input class="form-control" multiple type="file" id="formFile">
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
  name: 'ModalGallery'
}
</script>

<style scoped>

</style>