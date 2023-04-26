<template>
    <div class="row justify-content-md-center form-container mt-3">

        <h1 class="text-center bg-blue-accent-1 mb-5 p-1 rounded-1">Contate-nos</h1>

        <div v-if="errorOnSubmit" class="alert alert-danger text-center" role="alert">
            Preencha todos os campos de forma válida!
        </div>

        <div v-if="errorOnSubmit === false" class="alert alert-success text-center" role="alert">
            Obrigado, logo entraremos em contato!
        </div>

        <div class="d-flex" :class="{ 'flex-column': $vuetify.display.sm }">


            <div class="col col-lg-4">

            <!-- TODO - contacts -->

                teste

            </div>

            <div class="col">

                <div class="row g-3 d-flex">

                    <div class="col-md-12 form-floating">


                        <input
                                type="text"
                                class="form-control"
                                id="inputNome"
                                placeholder="nome"
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
                                placeholder="name@example.com"
                                :class="{ 'is-valid': emailValido, 'is-invalid': errorOnSubmit || emailInvalido && emailTocado }"
                                v-model="email"
                                @input="emailTocado = true"
                        >
                        <label for="inputNome">Email</label>

                        <div class="invalid-feedback" v-if="emailTocado && emailInvalido">
                            Por favor, digite um endereço de email válido.
                        </div>
                    </div>

                    <div class="col-12  mb-3  form-floating">
                        <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone"
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
                        <button type="submit" class="btn btn-primary" :class="{'btn-danger': errorOnSubmit, 'btn-success': errorOnSubmit === false}" @click="submit()">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>


import {vuetify} from "@/plugins";

export default {
    name: 'FormComponent',
    components: {},
    data() {
        return {
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

            this.errorOnSubmit = !this.nomeValido && !this.emailValido && !this.telefoneValido;

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
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email.trim());
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
</style>