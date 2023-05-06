<template>

    <div class="container mb-10" id="redesSociais">

        <div class="row justify-content-md-center form-container mt-3 ">

            <div class=" d-flex justify-center align-center mt-10">
                <h1 class="text-center bg-blue-accent-1 mb-5 p-1 w-75 rounded-1 text-white">Medias Sociais</h1>
            </div>
            <div class="d-flex justify-content-evenly  ">

                <div class="d-block text-center">
                    <img class="p-3 " src="@/assets/img/whatsapp.svg" alt="Imagem do WhatsApp">
                    <a class="d-block p-2 rounded-4 px-3 bg-info " alt="Link do WhatsApp" href=""
                       style="text-decoration: none;">WhatsApp</a>
                </div>

                <div class="d-block text-center">
                    <img class="p-3" src="@/assets/img/instagram.svg" alt="Imagem do Instagram">
                    <a class="d-block p-2 rounded-4 px-3 bg-info" alt="Link do Instagem" href=""
                       style="text-decoration: none;">Instagram</a>
                </div>

                <div class="d-block text-center">
                    <img class="p-3" src="@/assets/img/facebook.svg" alt="Imagem do Facebook">
                    <a class="d-block p-2 rounded-4 px-3 bg-info " alt="Link do Facebook" href=""
                       style="text-decoration: none;">Facebook</a>
                </div>

                <div class="d-block text-center">
                    <img class="p-3" src="@/assets/img/o-email.svg" alt="Imagem do E-mail">
                    <a class="d-block p-2 rounded-4 px-3 bg-info " alt="Link do E-mail" href=""
                       style="text-decoration: none;">E-mail</a>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "MidiasSociais",
};
</script>
<style scoped>
.form-container {
    background: var(--tertiary-gray);
}

.line {
    width: 1px;
}

</style>