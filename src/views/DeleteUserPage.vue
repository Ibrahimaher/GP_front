<template>
  <link rel="stylesheet" href="delete_style.css" />
  <div class="delete_container">
    <form action="" @submit.prevent="Delete">
      <h1>Delete User</h1>
      <div class="enter-container"></div>
      <label class="enter" for="">Enter User Id :</label>
      <br />
      <input
        v-model="id"
        class="id-inp"
        placeholder="    ........"
        type="text"
      />
      <br />
      <button class="delete-btn">Delete</button>
      <img class="delete-user" src="../assets/delete_user_img.png" alt="" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  methods: {
    Delete() {
      console.log("Login:", this.id);
    },
  },
};
</script>
