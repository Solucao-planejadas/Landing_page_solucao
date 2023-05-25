<template>
    <div class="row justify-content-md-center form-container mt-3 pt-10 pb-10" id="orcamento">
        <div class=" d-flex justify-center align-center">
            <h1 class="text-center bg-blue-accent-1 w-50 mb-5 p-1 rounded-1 text-white">Contate-nos</h1>
        </div>

        <div v-if="errorOnSubmit" class="alert alert-danger text-center" role="alert">
            Preencha todos os campos de forma válida!
        </div>

        <div v-if="errorOnSubmit === false" class="alert alert-success text-center" role="alert">
            Obrigado, logo entraremos em contato!
        </div>

        <div class="d-flex gap-2 p-2 justify-center align-center" :class="{ 'flex-column': $vuetify.display.sm || $vuetify.display.xs }">

            <IconsForm :icon_call="icon_call" :icon_location="icon_location" :icon_sms="icon_sms"/>

            <div v-if="!$vuetify.display.sm" class="col col-md-1 line bg-black h-100 mr-5"></div>

            <div class="col col-md-6" :class="{ 'col-md-12': $vuetify.display.sm }">

                <div class="row g-3 d-flex">

                    <div class="col-md-12 form-floating">

                        <input
                                type="text"
                                class="form-control"
                                id="inputNome"
                                :class="{ 'is-valid': nomeValido, 'is-invalid': errorOnSubmit || nomeInvalido && nomeTocado }"
                                v-model="nome"
                                @input="nomeTocado = true"
                        >
                        <label for="inputNome">Nome</label>

                        <div class="invalid-feedback" v-if="nomeTocado && nomeInvalido">
                            O nome deve ter pelo menos 2 caracteres e não deve conter números.
                        </div>

                    </div>

                    <div class="col-md-12 form-floating">

                        <input
                                type="email"
                                class="form-control"
                                id="inputEmail"
                                :class="{ 'is-valid': emailValido, 'is-invalid': errorOnSubmit || emailInvalido && emailTocado }"
                                v-model="email"
                                @input="emailTocado = true"
                        >
                        <label for="inputNome">Email</label>

                        <div class="invalid-feedback" v-if="emailTocado && emailInvalido">
                            Por favor, digite um endereço de email válido.
                        </div>
                    </div>

                    <div class="col-md-12  mb-3  form-floating">
                        <input type="tel"
                               inputmode="tel"
                               class="form-control"
                               id="inputTelefone"
                               v-mask="'(##) #####-####'"
                               :class="{ 'is-valid': telefoneValido, 'is-invalid': errorOnSubmit || telefoneInvalido && telefoneTocado }"
                               v-model="telefone" @input="(telefoneTocado = true)"
                        >

                        <label for="inputTelefone" class="form-label">Telefone</label>


                        <div class="invalid-feedback" v-if="telefoneTocado && telefoneInvalido">
                            Por favor, digite um número de telefone válido (formato: (xx) xxxxx-xxxx).
                        </div>
                    </div>

                    <div class="col-12 d-flex justify-center align-center">
                        <v-btn
                            :disabled="errorOnSubmit === false"
                            :loading="errorOnSubmit === true"

                            class="btn btn-primary text-none mb-4"
                            :class="{'btn-danger': errorOnSubmit, 'btn-success': errorOnSubmit === false, 'btn-light': this.errorOnSubmit || this.errorOnSubmit === false}"
                            color="indigo-darken-3"
                            size="default"
                            variant="flat"
                            @click="submit()"
                        >
                            Enviar
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import {vuetify} from "@/plugins";
import icon_sms from '@/assets/svg/🦆 icon _sms_.svg';
import icon_call from '@/assets/svg/🦆 icon _call_.png';
import icon_location from '@/assets/svg/🦆 icon _location_.svg';
import IconsForm from "@/components/IconsForm.vue";

export default {
    name: 'FormComponent',
    components: {IconsForm},
    data() {
        return {

            icon_sms,
            icon_call,
            icon_location,

            nome: '',
            email: '',
            telefone: '',
            errorOnSubmit: null,
            nomeTocado: false,
            emailTocado: false,
            telefoneTocado: false
        };
    },
    methods: {
        submit() {

            this.errorOnSubmit = this.nomeInvalido || this.emailInvalido || this.telefoneInvalido;

            setTimeout(() => {
                this.errorOnSubmit = '';
            }, 2500);

        }
    },
    computed: {
        vuetify() {
            return vuetify
        },
        nomeValido() {
            return !this.nomeInvalido && this.nome.trim().length > 0 && !this.nomeComNumeros;
        },
        emailValido() {
            return !this.emailInvalido && this.email.trim().length > 0;
        },
        telefoneValido() {
            return !this.telefoneInvalido && this.telefone.trim().length > 0;
        },

        nomeComNumeros() {
            return /\d/.test(this.nome.trim());
        },

        nomeInvalido() {
            return this.nome.trim().length < 2 || this.nomeComNumeros;
        },
        emailInvalido() {
            return !/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.email.trim());
        },
        telefoneInvalido() {
            return !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(this.telefone.trim());
        },
    },
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