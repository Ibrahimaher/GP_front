<template>
  <link rel="stylesheet" href="myprofile.css" />
  <!--- Boxicons Links-->
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
  />
  <!--- Remixicons Links-->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <div class="Bakgroun">
    <p class="vid">Vidtext</p>
    <nav id="nav" class="my-nav">
      <router-link style="text-decoration: none; color: #797777" to="/home"
        ><p class="pp">Home</p></router-link
      >

      <router-link
        style="text-decoration: none; color: rgba(146, 44, 148, 1)"
        to="/profile"
        ><p class="pp">Profile</p></router-link
      >
      <router-link style="text-decoration: none; color: #797777" to="/history"
        ><p class="pp">History</p></router-link
      >
      <router-link style="text-decoration: none; color: #797777" to="/help"
        ><p class="pp">Help</p></router-link
      >
      <router-link
        style="text-decoration: none; color: #797777"
        to="/contact-us"
        ><p class="pp">Contact us</p></router-link
      >
    </nav>
    <div class="info">
      <img src="@/assets/ProfilePicture.png" alt="" />
      <div class="userInfo">
        <form action="" @submit.prevent="edit">
          <div class="input-box">
            <input
              type="text"
              v-model="username"
              placeholder="Username"
              required
            />
          </div>

          <div class="input-box">
            <input type="email" v-model="email" placeholder="E-mail" required />
          </div>
          <div class="input-box">
            <input type="text" v-model="phone" placeholder="Phone" required />
          </div>
        </form>
      </div>
    </div>

    <div class="twobans">
      <router-link to="/edit">
        <button class="edit">Edit</button>
      </router-link>

      <router-link to="/">
        <button class="logout">logout</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    };
  },
  methods: {
    edit() {
      console.log("Edit:", this.username, this.email, this.password);
    },
  },
};
</script>
