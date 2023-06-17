<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="credentials.email" />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="credentials.pass" />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      credentials: {
        email: '',
        pass: ''
      }
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  beforeMount() {
    // const check = async () => await store.dispatch('checkAuthentication')
    // if (check) {
    //   this.$router.push('/dashboard');
    // }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.credentials);
      this.$router.push('/dashboard');
    }
  }
};
</script>
