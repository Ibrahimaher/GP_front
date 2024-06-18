<template>
  <link rel="stylesheet" href="contact_us.css" />
  <p class="vid">Vidtext</p>
  <nav id="nav" class="my-nav">
    <router-link style="text-decoration: none; color: #797777" to="/home"
      ><p class="pp">Home</p></router-link
    >

    <router-link style="text-decoration: none; color: #797777" to="/profile"
      ><p class="pp">Profile</p></router-link
    >
    <router-link style="text-decoration: none; color: #797777" to="/history"
      ><p class="pp">History</p></router-link
    >
    <router-link style="text-decoration: none; color: #797777" to="/help"
      ><p class="pp">Help</p></router-link
    >
    <router-link
      style="text-decoration: none; color: rgba(146, 44, 148, 1)"
      to="/contact-us"
      ><p class="pp">Contact us</p></router-link
    >
  </nav>
  <div class="all">
    <div class="icon">
      <img src="../assets/icons8-location-24.png" alt="" />
      <label> Location</label>
      <br />
      <br />
      <img src="../assets/icons8-email-24.png" alt="" />
      <label> vid@gmail.com</label>
      <br />
      <br />
      <img src="../assets/icons8-phone-24.png" alt="" />
      <label> +20 1454848</label>
    </div>

    <div class="sendmsg">
      <p class="sent">Leave Us Message</p>
      <input type="email" v-model="uemail" placeholder=" Email" id="" />

      <input type="text" v-model="msg" placeholder=" Message" id="" />
      <button>Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uemail: "",
      msg: "",
    };
  },
};
</script>
