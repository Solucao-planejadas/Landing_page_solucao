<template>
<div class="limiter ">
    <div>

    </div>
		<div class="container-login100 ">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt " data-tilt>
					<img src="../assets/img/img-02.png" alt="IMG">
				</div>


          <div class="border-start border-3 border-black  css"></div>

          <form class="login100-form validate-form " @submit.prevent="submit">
            <span class="login100-form-title">
              Login 
            </span>

            <div class="wrap-input100 validate-input" >
              <input class="input100" type="text" name="username" v-model="form.username" placeholder="Usuário:"/>
              <span class="focus-input100"></span> 
              <span class="symbol-input100">
                <i class="bi bi-person-circle" aria-hidden="true"></i>
              </span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Password is required">
              <input class="input100" type="password" name="password" v-model="form.password" placeholder="Senha:"/>
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="bi bi-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login100-form-btn  ">
              <button type="submit" class="login100-form-btn ">
                Login
              </button>
            </div>
            <div v-if="error" class="error">{{  error }} </div>
            <p v-if="showError" id="error">Username or Password is incorrect</p>
          </form>
          
			</div>
		</div>
	</div>

</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'LoginPage',
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("email", this.form.username);
      User.append("pass", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("/dash");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};



</script>

<style scoped>
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}




</style>