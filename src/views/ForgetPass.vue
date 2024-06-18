<template>
  <link rel="stylesheet" href="forget_pass.css" />
  <div class="ww1">
    <form action="" @submit.prevent="reset">
      <h3>
        To reset your password ,enter your username and email below.You will be
        contacted by us later, with instructions on how sign in again
      </h3>
      <div class="input-box1">
        <input
          type="text"
          v-model="username"
          placeholder=" Username"
          required
        />
      </div>

      <div class="input-box1">
        <input type="email" v-model="email" placeholder=" E-mail" required />
      </div>

      <button class="btn2">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      copassword: "",
    };
  },
  methods: {
    reset() {
      console.log("Login:", this.username, this.password, this.copassword);
    },
  },
};
</script>
