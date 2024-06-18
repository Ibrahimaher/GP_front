<template>
  <link rel="stylesheet" href="edit_style.css" />
  <div class="ww1">
    <form action="" @submit.prevent="Edit">
      <h1>Edit Information</h1>
      <div class="input-box1">
        <input
          type="text"
          v-model="username"
          placeholder=" Username"
          required
        />
      </div>

      <div class="input-box1">
        <input
          type="password"
          v-model="password"
          placeholder=" Old Password"
          required
        />
      </div>
      <div class="input-box1">
        <input
          type="password"
          v-model="copassword"
          placeholder=" New Password"
          required
        />
      </div>

      <button class="btn1">Save</button>
      <button class="btn2">Cancel</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      copassword: "",
    };
  },
  methods: {
    Edit() {
      console.log("Login:", this.username, this.password, this.copassword);
    },
  },
};
</script>
