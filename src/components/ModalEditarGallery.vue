<template>
    <!-- Modal Editar Album -->
    <div class="modal fade" :id="'editarportfolio' + modalId" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Editar album</h1>
                    <CardErroMessage v-if="erroIf2" :errorMessageCard="errorMessage"></CardErroMessage>
                    <CardErroMessage v-if="erroIf1" :errorMessageCard="errorMessage"></CardErroMessage>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center mt-5">
                        <div class=" ">
                            <div class="card  rounded-3">
                                <div class="border-bottom">
                                    <div class="m-1 rounded-3 d-flex justify-content-center"
                                        style="background-color: var(--purple-primary);">
                                        <h5 class="h5 text-white">Seu Portfólio</h5>
                                    </div>
                                    <div class="input-group p-3 ">
                                        <span class="input-group-text " id="inputGroup-sizing-default">Titulo</span>
                                        <input type="text" class="form-control " aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" :value="dadosModal.title">
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            <h5>
                                                Sua Capa
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <div class="card  m-2 border border-black border-1" style="width: 25rem;">
                                            <div class="border-bottom border-black border-1">
                                                <img :src="dadosModal.CoverPhotoFileName" class="card-img-top" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-3 ">
                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" id="inputGroupFile02"
                                                @change="adicionarCapa">
                                        </div>
                                    </div>
                                    <h5 class="ms-3 mt-4">
                                        Tipo
                                    </h5>
                                    <div class=" m-3">
                                        <select class="form-select" name="type" id="" v-model="dadosModal.typeId" disabled>
                                            <option value="1">Sobre Medida</option>
                                            <option value="2">Pronto Entrega</option>
                                        </select>
                                    </div>
                                    <h5 class="ms-3 mt-4">
                                        Descrição do Produto
                                    </h5>
                                    <div class="form-floating m-3">
                                        <textarea class="form-control mb-3" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"
                                            v-model="dadosModal.description"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                    <div class="m-3 mb-3 ">
                                        <div class="d-flex justify-content-end">
                                            <h5>
                                                Salvar informações do Album
                                            </h5>
                                        </div>
                                        <div class="d-flex justify-content-end mt-3">
                                            <button class="btn btn-success mb-3 " @click="UpAlbum()">
                                                Salvar
                                            </button>
                                        </div>
                                    </div>
                                    <h5 class="ms-3">
                                        Suas Imagens
                                    </h5>
                                    <div class="">
                                        <div class="d-flex flex-wrap  mt-3 g-4  "
                                            v-for="(photo) in store.getters.StateGalleryItems" :key="photo">
                                            <div class="card m-auto border mt-3" v-for="(item) in photo" :key="item.id"
                                                style="width: 300px;">
                                                <div class="border-bottom">
                                                    <img :src="item.itemFileName" class="card-img-top" alt=""
                                                        style="height: 200px;">
                                                </div>
                                                <div class="card-body d-grid gap-2">
                                                    <button type="button" class="btn btn-danger"
                                                        @click=" DellFoto(item.id)">
                                                        <font-awesome-icon icon="trash" />
                                                        Deletar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <h5>
                                            Carregue Suas Imagem:
                                        </h5>
                                        <div class="input-group mt-3">
                                            <input type="file" class="form-control btn btn-outline-primary"
                                                @change="adicionarFoto" aria-label="Upload" ref="fileInput" multiple>
                                            <button class="btn btn-outline-secondary btn-success text-white" type="submit"
                                                id="inputGroupFileAddon04" @click=" AddFoto()">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

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
    name: "ModalEditarGallery",
    props: {
        modalId: {
            type: String,
            require: true
        },
        albomModal: {
            type: Array,
            require: true
        },
    },
    data() {
        return {
            errorMessage: null,
            erroIf1: false,
            erroIf2: false,
            album: {
                Titulo: null,
                Texto: null,
                FotoCapa: null,

            },
            FotoCapa: null,
            dadosModal: {
                title: null,
                description: null,
                photoType: null,
                galleryCover: null,
            },
            dadosModalFotos: store.getters.StateGalleryItems,
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifalbum: false,
            albums: [],
            inputBloqueado: false,
            botaoBloqueado: true,
            editaralbum: {
                foto: null,
                id: null,
            },
            fotos: []
        }
    },
    components: {
        CardErroMessage,
    },
    computed: {
        store() {
            return store
        },
    },
    created() {
        this.dados();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetGallery", "GetGalleryItems", "DellGalleryItems", "UpGalleryItems", "UpGallery", "GetGallery"]),
        ...mapGetters([""]),
        ...mapMutations(["resetItems"]),
        adicionarCapa(event) {
            this.FotoCapa = event.target.files[0];
        },
        async UpAlbum() {
            this.isLoading = true;
            const album = new FormData();
            album.append("title", this.dadosModal.title);
            album.append("galleryCover", this.FotoCapa);
            album.append("photoType", this.dadosModal.typeId);
            album.append("description", this.dadosModal.description);
            const avatarPayload = {
                token: store.getters.StateToken.token,
                infos: album,
                id: this.modalId
            };
            try {
                await this.UpGallery(avatarPayload)
                await this.GetGallery()
                this.dadosModal = store.getters.StateGallery.gallerys[0]
                this.isLoading = false;
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf1 = true
                setTimeout(() => {
                    this.erroIf1 = false
                }, 4000);
                console.log(error)
            }
        },
        async AddFoto() {
            this.isLoading = true;
            const foto = new FormData();
            if (this.fotos.length != 0) {
                for (let index = 0; index < this.fotos.length; index++) {
                    foto.append("galleryItens[]", this.fotos[index]);
                }
                const Payload = {
                    token: store.getters.StateToken.token,
                    photo: foto,
                    id: this.modalId
                };
                try {
                    await this.UpGalleryItems(Payload)
                    this.isLoading = false;
                    this.ifalbum = true;
                    const ttt = null
                    this.resetItems(ttt)
                    const payload = {
                        token: store.getters.StateToken.token,
                        id: this.modalId
                    }
                    await this.GetGalleryItems(payload)
                    this.ifalbum = true;

                } catch (error) {
                    this.isLoading = false;
                    const message = error.request.response
                    this.errorMessage = JSON.parse(message)
                    this.erroIf2 = true
                    setTimeout(() => {
                        this.erroIf2 = false
                    }, 4000);
                }
            } else {
                this.errorMessage = ["Campo de Arquivo está Vazio!!"]
                this.erroIf2 = true
                setTimeout(() => {
                    this.erroIf2 = false
                }, 4000);
            }
        },
        async DellFoto(id) {
            const avatarPayload = {
                token: store.getters.StateToken.token,
                id: id
            };
            try {
                await this.DellGalleryItems(avatarPayload)
                const ttt = null
                this.resetItems(ttt)
                const payload = {
                    token: store.getters.StateToken.token,
                    id: this.modalId
                }
                await this.GetGalleryItems(payload)
                this.ifalbum = true;
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf2 = true
                setTimeout(() => {
                    this.erroIf2 = false
                }, 4000);
            }
        },
        sair() {
            this.ifalbum = false;
        },
        adicionarFoto(event) {
            this.fotos = event.target.files;
        },
        deletarFoto(index, id) {
            const valor = store.getters.StateGalleryItems
            this.dellItems(valor.splice(index, 1));
            this.editaralbum.id = id
        },
        async dados() {
            this.dadosModal = this.albomModal
            this.dadosModalFotos = []
            this.dadosModalFotos = store.getters.StateGalleryItems
            console.log(store.getters.StateGalleryItems)
            console.log(this.dadosModal)
            const payload = {
                token: store.getters.StateToken.token,
                id: this.modalId
            }
            await this.GetGallery()
            await this.GetGalleryItems(payload)
        },
    },

}
</script>

<style scoped></style>