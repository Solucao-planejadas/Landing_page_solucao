<template>
    <div class="row justify-content-md-center form-container mt-3">
        <div class="col col-lg-4">
            teste
        </div>

        <div class="col">
            <div class="row g-3">
                <div class="col-md-12">
                    <label for="inputNome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputNome"
                           :class="{ 'is-valid': nomeValido, 'is-invalid': nomeInvalido && nomeTocado }" v-model="nome"
                           @input="nomeTocado = true">
                    <div class="invalid-feedback" v-if="nomeTocado && nomeInvalido">
                        O nome deve ter pelo menos 2 caracteres e não deve conter números.
                    </div>
                </div>

                <div class="col-md-12">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail"
                           :class="{ 'is-valid': emailValido, 'is-invalid': emailInvalido && emailTocado }"
                           v-model="email" @input="emailTocado = true">
                    <div class="invalid-feedback" v-if="emailTocado && emailInvalido">
                        Por favor, digite um endereço de email válido.
                    </div>
                </div>

                <div class="col-12">
                    <label for="inputTelefone" class="form-label">Telefone</label>
                    <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone"
                           v-mask="'(##) #####-####'"
                           :class="{ 'is-valid': telefoneValido, 'is-invalid': telefoneInvalido && telefoneTocado }"
                           v-model="telefone" @input="(telefoneTocado = true)"
                    >
                    <div class="invalid-feedback" v-if="telefoneTocado && telefoneInvalido">
                        Por favor, digite um número de telefone válido (formato: (xx) xxxxx-xxxx).
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'FormComponent',
    components: {
    },
    data() {
        return {
            nome: '',
            email: '',
            telefone: '',
            nomeTocado: false,
            emailTocado: false,
            telefoneTocado: false
        };
    },
    computed: {
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