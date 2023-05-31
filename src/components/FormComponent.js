import {vuetify} from "@/plugins";
import icon_sms from '@/assets/svg/🦆 icon _sms_.svg';
import icon_call from '@/assets/svg/🦆 icon _call_.png';
import icon_location from '@/assets/svg/🦆 icon _location_.svg';
import IconsForm from "@/components/IconsForm.vue";
import axios from "axios";

export default {
    name: 'FormComponent',
    components: {IconsForm},
    data() {
        return {

            icon_sms,
            icon_call,
            icon_location,

            user: {},

            nome: '',
            email: '',
            telefone: '',
            descricao: '',
            errorOnSubmit: null,
            nomeTocado: false,
            emailTocado: false,
            telefoneTocado: false,
            descricaoTocado: false,

            erroApi: false,
            messageApi: '',

            codeResponse: '',
        };
    },
    methods: {
        submit() {
            this.messageApi = '';
            this.errorOnSubmit = this.nomeInvalido || this.emailInvalido || this.telefoneInvalido || !this.descricaoValida;

            if (this.errorOnSubmit === false) {
                this.user = {
                    name: this.nome,
                    phone: this.telefone,
                    mail: this.email,
                    description: this.descricao
                };
                axios.post(`${process.env.VUE_APP_API_URL}/send-mail`, this.user)
                    .then((response) => {
                        this.codeResponse = 200;
                        this.erroApi = false;
                        this.messageApi = '';
                        this.nome = '';
                        this.email = '';
                        this.telefone = '';
                        this.descricao = '';
                        this.nomeTocado = false;
                        this.emailTocado = false;
                        this.telefoneTocado = false;
                        this.descricaoTocado = false;
                        console.log(response);
                    })
                    .catch((error) => {
                        this.erroApi = true;
                        this.messageApi = error.response.data.detail;
                        console.log("error");
                        console.log(error);
                    });
            }

            setTimeout(() => {
                this.codeResponse = ''
                this.erroApi = false
                this.errorOnSubmit = '';
            }, 4500);
        }
    },
    mounted() {
        console.log(`${process.env.VUE_APP_API_URL}/send-mail`)
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
        descricaoValida() {
            return this.descricao.trim().length > 5;
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