<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Produtos</h1>
          <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
          <div v-if="sucessoMessage" class="alert alert-success d-flex text-center" role="alert">
            Cadastrado com Sucesso.
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label" for="">Titulo</label>
            <input class="form-control" type="text" name="" id="" v-model="dados.Titulo">
          </div>
          <div class="mb-3">
            <label class="form-label" for="">Tipo de produto</label>
            <select class="form-select" name="type" id="" v-model="dados.typeId">
              <option selected>Escolha o Tipo</option>
              <option value="1">Sobre Medida</option>
              <option value="2">Pronto Entrega</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="dados.Texto"></textarea>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Foto de capa</label>
            <input class="form-control" type="file" id="formFile" @change="GetCapa">
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Fotos do produto</label>
            <input class="form-control" multiple type="file" id="formFile" @change="GetFotos">
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sair</button>
          <button type="button" class="btn btn-primary" @click="createGallery()">Criar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'
import CardErroMessage from "@/components/CardErroMessage.vue"
export default {
  name: 'ModalGallery',
  components: {
    CardErroMessage
  },
  data() {
    return {
      dados: {
        Titulo: null,
        typeId: null,
        Texto: null,
        Capa: null,
        Fotos: [],
      },
      isLoading: false,
      errorMessage: null,
      erroIf: false,
      sucessoMessage: false,
    }
  },
  computed: {
    store() {
      return store
    },
  },
  methods: {
    validateOnBack: Boolean,
    ...mapActions(["GetGallery", "CreateGallery"]),
    ...mapGetters([""]),
    ...mapMutations(["resetItems"]),
    GetCapa(event) {
      this.dados.Capa = event.target.files[0]
    },
    GetFotos(event) {
      this.dados.Fotos = event.target.files
    },
    async createGallery() {



      const album = new FormData();

      // console.log(this.dados.Fotos)

      for (let index = 0; index < this.dados.Fotos.length; index++) {
        album.append("galleryItens[]", this.dados.Fotos[index]);
      }

      album.append("title", this.dados.Titulo);
      album.append("galleryCover", this.dados.Capa);
      album.append("photoType", this.dados.typeId);
      album.append("description", this.dados.Texto);
      // album.append("portifolioPhotos[]", this.album.Fotos);

      const avatarPayload = {
        token: store.getters.StateToken.token,
        infos: album,
      };


      try {


        // alert(`Album Cadastrado com sucesso`);
        await this.CreateGallery(avatarPayload)
        await this.GetGallery()
        this.$router.push("/Gallery");
        this.sucessoMessage = true
        setTimeout(() => {
          this.sucessoMessage = false
        }, 4000);

      } catch (error) {
        const message = error.request.response
        this.errorMessage = JSON.parse(message)
        this.erroIf = true
        setTimeout(() => {
          this.erroIf = false
        }, 4000);

        console.log(error)

      }





    },
  },
}
</script>

<style scoped></style>