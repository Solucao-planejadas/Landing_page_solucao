<template>
    <div class="col col-md-2">
        <div class="d-flex flex-column justify-center gap-3 align-center "
            >
            <div class="text-center mb-2">
                <img :src="icon_location" class="w-50 mb-2" alt="" style="max-width: 50px;" />

              <div class="rounded-4 color_text_form p-1 px-3">
                <p class="">R. Alexandre Fernandes, 247</p>
                <p class="">Vila dona Sinha, São Paulo - SP,
                  03924-000</p>
              </div>

            </div>
            <div class="text-center mb-2">
                <img :src="icon_call" class="w-50 mb-2" alt="" style="max-width: 50px;" />
                <p class="color_text_form rounded-4 p-1 px-3">(11) 2667-6049</p>
            </div>
            <div class="text-center mb-2">
                <img :src="icon_sms" class="w-50 mb-2" alt="" style="max-width: 50px;" />
                <p class="color_text_form rounded-4 p-1 px-3 ">Solucoesplanejadas@gmail.com</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'IconsForm',
    props: {
        icon_call: {},
        icon_location: {},
        icon_sms: {}
    }
}
</script>
<style scoped>
.color_text_form {
    background: var(--secodary-gray);
}
</style>