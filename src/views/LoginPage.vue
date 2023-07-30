
<template >


    <body>
	
      
	<div class="limiter ">
    <div>

    </div>
		<div class="container-login100 ">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt " data-tilt>
					<img src="../assets/img/img-02.png" alt="IMG">
				</div>

          <div class="border-start border-3 border-black  css"></div>
            
          <form class="login100-form validate-form ">
            <span class="login100-form-title">
              Login
            </span>

            <div class="wrap-input100 validate-input" >
              <input class="input100 " type="text" id="username" name="email" placeholder="Usuário" v-model="credentials.email">
              <span class="focus-input100"></span> 
              <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Password is required">
              <input class="input100" type="password" id="password" name="pass" placeholder="Senha" v-model="credentials.pass">
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            
            <div class="container-login100-form-btn  ">
              <button type="submit" class="login100-form-btn ">
                Login
              </button>
            </div>
            <div v-if="error" class="error">{{  error }} </div>
          </form>
          
			</div>
		</div>
	</div>
	


</body>

</template>



<style>

</style>


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

