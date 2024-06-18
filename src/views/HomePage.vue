<template>
  <link rel="stylesheet" href="homepage.css" />
  <link rel="stylesheet" href="HomeFeatures.css" />
  <div class="body">
    <p class="vid">Vidtext</p>
    <nav id="nav" class="my-nav">
      <router-link
        style="text-decoration: none; color: rgba(146, 44, 148, 1)"
        to="/home"
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
        style="text-decoration: none; color: #797777"
        to="/contact-us"
        ><p class="pp">Contact us</p></router-link
      >
    </nav>
    <div class="info1">
      <div class="photo">
        <img src="../assets/vector_video.jpg" alt="" />
      </div>
      <div class="uploadPart">
        <div class="upload">
          <div id="app">
            <UploadVideo />
          </div>
          <div class="btn">
            <button class="btnUpload">Upload Video</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="all-cards">
          <router-link to="/video-to-text">
            <div class="without Face Expression">
              <FeaturesHo
                :imageSrc="require('@/assets/unsplash2.png')"
                caption=" Video to Text without Face Expression "
              />
            </div>
          </router-link>
          <router-link to="/video-with-face">
            <div class="with Face Expression">
              <FeaturesHo
                :imageSrc="require('@/assets/unsplash3.png')"
                caption=" Video to Text with Face Expression "
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadVideo from "@/components/UploadVideo.vue";
import FeaturesHo from "@/components/FeaturesHo.vue";

export default {
  name: "App",
  components: {
    UploadVideo,
    FeaturesHo,
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>
