<template>
    <!-- Modal Editar Album -->
    <div class="modal fade" :id="'editarportfolio' + modalId" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Portfólio</h1>
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
                                    <CardErroMessage v-if="erroIf1" :errorMessageCard="errorMessage"></CardErroMessage>


                                    <div class="input-group p-3 ">
                                        <span class="input-group-text " id="inputGroup-sizing-default">Titulo</span>
                                        <input type="text" class="form-control " aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" :value="dadosModal.title">
                                    </div>


                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            Sua Capa </div>
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


                                    <h6 class="ms-3 mt-4">
                                        Tipo
                                    </h6>

                                    <div class=" m-3">
                                        <select class="form-select" name="type" id="" v-model="dadosModal.typeId" disabled>
                                            <option value="1">Sobre Medida</option>
                                            <option value="2">Pronto Entrega</option>
                                        </select>
                                    </div>

                                    <h6 class="ms-3 mt-4">
                                        texto
                                    </h6>

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
                                        <div class="d-flex justify-content-end">

                                            <button class="btn btn-success mb-3 " @click="UpAlbum()">
                                                Salvar
                                            </button>
                                        </div>
                                    </div>

                                    <CardErroMessage v-if="erroIf2" :errorMessageCard="errorMessage"></CardErroMessage>

                                    <h6 class="ms-3">
                                        Suas Imagens
                                    </h6>



                                    <div>
                                        <!-- {{ dadosModalFotos.gallerysItems }} -->
                                        <div class=" card-group mt-3 g-4 d-flex flex-wrap"
                                            v-for="(photo) in store.getters.StateGalleryItems" :key="photo">
                                            <!-- {{ photo[index] }} -->
                                            <div class="card m-2 border" v-for="(item) in photo" :key="item.id">
                                                <div class="border-bottom">
                                                    <img :src="item.itemFileName" class="card-img-top" alt="">
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


                                        <h6>
                                            Carregue Suas Imagem:
                                        </h6>



                                        <div class="input-group">
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="eeeeeeee()">Sair</button>
                    <button type="button" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import loading from "@/components/Loading.vue"
// import CardErroMessage from "@/components/CardErroMessage.vue"



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
        // loading,
        // CardErroMessage,
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
            // Lógica para adicionar a foto ao array
            // ...


            // Atualiza o objeto editaralbum.foto com a nova foto
            this.FotoCapa = event.target.files[0];
            // Bloqueie o input se houver 5 fotos no array
            // if (this.dadosModal.photos.length >= 5) {
            //     this.inputBloqueado = true;
            //     this.$refs.fileInput.value = null;

            // }
        },

        async UpAlbum() {




            this.isLoading = true;
            const album = new FormData();



            album.append("title", this.dadosModal.title);
            album.append("galleryCover", this.FotoCapa);
            album.append("photoType", this.dadosModal.typeId);
            album.append("description", this.dadosModal.description);
            // album.append("portifolioPhotos[]", this.album.Fotos);

            const avatarPayload = {
                token: store.getters.StateToken.token,
                infos: album,
                id: this.modalId
            };


            try {


                // alert(`Album Cadastrado com sucesso`);
                await this.UpGallery(avatarPayload)
                await this.GetGallery()
                this.dadosModal = store.getters.StateGallery.gallerys[0]
                this.isLoading = false;

            } catch (error) {
                // this.isLoading = false;
                // const message = error.request.response
                // this.errorMessage = JSON.parse(message)
                // this.erroIf1 = true
                // setTimeout(() => {
                //     this.erroIf1 = false
                // }, 4000);
                console.log(error)

            }





        },
        async AddFoto() {

            // console.log(this.editaralbum.foto)
            this.isLoading = true;
            const foto = new FormData();


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
                // alert(`Album Cadastrado com sucesso`);
                this.isLoading = false;
                this.ifalbum = true;
                console.log(this.isLoading, "loading")
                const ttt = null
                this.resetItems(ttt)

                const payload = {
                    token: store.getters.StateToken.token,
                    id: this.modalId
                }
                await this.GetGalleryItems(payload)
                this.ifalbum = true;
                console.log(this.isLoading, "loading")

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
        async DellFoto(id) {


            const avatarPayload = {
                token: store.getters.StateToken.token,
                id: id
            };

            try {

                await this.DellGalleryItems(avatarPayload)
                // alert(`Album Cadastrado com sucesso`);
                const ttt = null
                this.resetItems(ttt)

                const payload = {
                    token: store.getters.StateToken.token,
                    id: this.modalId
                }
                await this.GetGalleryItems(payload)
                this.ifalbum = true;
                console.log(this.isLoading, "loading")

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
            // Lógica para adicionar a foto ao array
            // ...


            // Atualiza o objeto editaralbum.foto com a nova foto
            this.fotos = event.target.files;
        },
        deletarFoto(index, id) {
            // Remova a foto do array com base no índice

            const valor = store.getters.StateGalleryItems
            this.dellItems(valor.splice(index, 1));


            // Aqui você pode adicionar a lógica para deletar a foto no backend usando o ID idtb_img_video
            this.editaralbum.id = id
        },


        async dados() {
            this.dadosModal = this.albomModal
            this.dadosModalFotos = []
            this.dadosModalFotos = store.getters.StateGalleryItems
            console.log(store.getters.StateGalleryItems)
            console.log(this.dadosModal)
            // console.log(store.getters.StateToken.token, "token")

            const payload = {
                token: store.getters.StateToken.token,
                id: this.modalId
            }

            await this.GetGallery()
            await this.GetGalleryItems(payload)

        },


        eeeeeeee() {
            // const ttt = null
            // this.resetItems(ttt)
        },








        teste() {
            console.log(store.getters.StateGalleryItems)
        }
    },

}
</script>

<style scoped></style>