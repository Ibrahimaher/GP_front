<template>
  <link rel="stylesheet" href="signin.css" />
  <div class="big">
    <div class="im">
      <img src="../assets/signin.jpg" alt="" />
    </div>
    <div class="ww">
      <form @submit.prevent="login">
        <h1>Sign In</h1>

        <div class="input-box">
          <input type="email" v-model="email" placeholder="E-mail" required />
        </div>

        <div class="input-box">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>

        <div class="remember">
          <router-link to="/forgetpassword">
            <p>Forget Password?</p>
          </router-link>
        </div>
        <router-link to="/home">
          <button class="signin-btn">Sign In</button>
        </router-link>

        <div class="sign-up-link">
          <p>
            Don't have an account?
            <router-link to="/signup">Sign Up</router-link>
          </p>
        </div>

        <!-- Display validation message -->
        <div v-if="!isValidForm" class="validation-message">
          Invalid form, Please fill in all fields.
        </div>
        <div v-if="isValidForm" class="validation-message1">valid form.</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValidForm() {
      return this.email && this.password;
    },
  },
  methods: {
    login() {
      if (this.isValidForm) {
        console.log("Login:", this.email, this.password);
        // Add your login logic here
      } else {
        // Validation message will be shown automatically
      }
    },
  },
};
</script>

<style scoped>
/* Add styling for the validation message */
.validation-message {
  color: red;
  margin-bottom: 10px;
}
.validation-message1 {
  color: green;
  margin-bottom: 10px;
}
</style>
