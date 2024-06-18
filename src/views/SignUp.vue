<template>
  <link rel="stylesheet" href="signup.css" />

  <body>
    <div class="pb">
      <div class="im">
        <img src="../assets/signup.jpg" alt="" />
      </div>
      <div class="ww">
        <form action="" @submit.prevent="signUp">
          <h1>Sign Up</h1>

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

          <div class="input-box">
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>

          <div class="input-box">
            <input
              type="password"
              v-model="cpassword"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div class="check">
            <label class="gender">Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="m"
              class="m"
              v-model="picked"
            />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="f"
              class="y"
              v-model="picked"
            />
            Female
          </div>

          <div class="select">
            <label class="question">What will you use VIDTEXT for?</label>
            <br />
            <br />
            <div class="con">
              <input type="radio" name="question" class="j" v-model="picked2" />
              For my job
              <br />
              <input type="radio" name="question" class="e" v-model="picked2" />
              For my education
              <br />
              <input type="radio" name="question" class="p" v-model="picked2" />
              For a personal project
            </div>
          </div>

          <router-link to="/home">
            <button class="signup-btn">Create Account</button>
          </router-link>

          <div class="sign-up-link">
            <p>
              Already have an account?
              <router-link style="color: #922c94" to="/signin"
                >Sign In</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      cpassword: "",
      picked: "",
      picked2: "",
    };
  },
  methods: {
    signUp() {
      console.log(
        "Sign Up:",
        this.username,
        this.email,
        this.password,
        this.picked
      );
    },
  },
};
</script>
