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
        <tbody v-if="ifGallery">
          <tr v-for="(item, index) in items" :key="item[index]">
            <th scope="row">{{ item.id }}</th>
            <td>
              <div v-if="item.typeId == 1">
                Sobre Medida
              </div>
              <div v-if="item.typeId == 2">
                Pronto Entrega
              </div>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ dataFormatada(item.updated_at) }}</td>
            <td class="d-flex justify-content-center align gap-2">
              <button class="btn btn-danger" @click="dellGallery(item.id)">
                Delete
              </button>
              <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editarportfolio' + item.id"
                @click="editar(item.id)">
                Editar
              </button>
              <ModalEditarGallery :modalId="item.id" :albomModal="item"></ModalEditarGallery>
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
import ModalEditarGallery from "@/components/ModalEditarGallery.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";
import store from "@/store";
import { format } from 'date-fns';

export default {
  components: { ModalGallery, ModalEditarGallery },
  data() {
    return {
      items: {
        id: null,
        title: null,
        CoverPhotoFileName: null,
        created_at: null,
        updated_at: null,
        typeId: null,
      },
      ifGallery: false,
    }
  },
  computed: {
    store() {
      return store
    },
  },
  created() {
    this.getGallerys();
  },
  methods: {
    ...mapActions(["LogIn", "GetGallery", "GetGalleryItems", "DellGallery"]),
    ...mapMutations(["resetItems"]),
    ...mapGetters(["StateToken"]),
    async getGallerys() {
      if (store.getters.StateGallery != null || store.getters.StateGallery != undefined) {
        this.items = store.getters.StateGallery.gallerys
        this.ifGallery = true
      }
      await this.GetGallery();
    },
    async editar(id) {
      try {
        const ttt = null
        this.resetItems(ttt)
        const payload = {
          token: this.StateToken(),
          id: id
        }
        await this.GetGalleryItems(payload)
      } catch (error) {
        console.log(error)
      }
    },
    async dellGallery(id) {
      try {
        const payload = {
          token: this.StateToken(),
          id: id
        }
        await this.DellGallery(payload)
        await this.GetGallery();
        await this.getGallerys();

      } catch (error) {
        console.log(error)
      }
    },
    dataFormatada(upData) {
      try {
        const data = new Date(upData);
        if (!isNaN(data.getTime())) {
          return format(data, 'dd/MM/yyyy');
        } else {
          return 'Data inválida';
        }
      } catch (error) {
        return 'Erro ao formatar a data';
      }
    },
  },

}
</script>


<style scoped></style>