<template>
  <link rel="stylesheet" href="help_style.css" />

  <div class="body">
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
      <router-link style="text-decoration: none; color: #922c94" to="/help"
        ><p class="pp">Help</p></router-link
      >
      <router-link
        style="text-decoration: none; color: #797777"
        to="/contact-us"
        ><p class="pp">Contact us</p></router-link
      >
    </nav>

    <div class="help-page">
      <h2>How to summarize text with face expression?</h2>
      <ol>
        <li>Get start</li>
        <li>Login</li>
        <li>Upload video</li>
        <li>Click on button video to text with face expression</li>
        <li>Click on button Summarize text with face Expression</li>
      </ol>
    </div>

    <div class="help-page">
      <h2>How to transform Video to Text without Face Expression ?</h2>
      <ol>
        <li>Get start</li>
        <li>Login</li>
        <li>Upload video</li>
        <li>Click on button video to text without face expression</li>
      </ol>
    </div>
    <div class="help-page">
      <h2>How to transform Video to Text with Face Expression ?</h2>
      <ol>
        <li>Get start</li>
        <li>Login</li>
        <li>Upload video</li>
        <li>Click on button Video to Text with Face Expression</li>
      </ol>
    </div>
    <div class="help-page">
      <h2>How to transform text to audio?</h2>
      <ol>
        <li>Get start</li>
        <li>Login</li>
        <li>Upload video</li>
        <li>Click on button Video to Text with Face Expression</li>
        <li>Click on button text to audio</li>
      </ol>
    </div>

    <div class="help-page">
      <h2>How to translate text in video with Face Expression ?</h2>
      <ol>
        <li>Get start</li>
        <li>Login</li>
        <li>Upload video</li>
        <li>
          Click on button Video to Text without Face Expression /without Face
          Expression
        </li>
        <li>Click on button translate</li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    toggleNav() {
      document.getElementById("nav").style.color = "red";
    },
  },
};
</script>
