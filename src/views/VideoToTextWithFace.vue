<template>
  <link rel="stylesheet" href="video_to_text_with_face.css" />
  <p class="title">Converting video to text...</p>
  <div class="container">
    <div class="content">
      <div class="output-buttons">
        <div class="output-field-wrapper">
          <OutputOutputField
            v-if="posts.length > 0"
            :fileContent="posts[0].body"
          />
        </div>
        <div class="download-review-wrapper">
          <DownloadAndReview />
        </div>
      </div>
      <div class="all-cards">
        <router-link to="/summarization-w-face">
          <div class="summarize-card">
            <ThreeFeatures
              :imageSrc="require('@/assets/Summary.png')"
              caption=" Summarize Text with Face Expression "
            />
          </div>
        </router-link>
        <router-link to="/audio-output-with-face">
          <div class="audio-card">
            <ThreeFeatures
              :imageSrc="require('@/assets/audio.png')"
              caption=" Text to Audio "
            />
          </div>
        </router-link>
        <router-link to="/translation-w-face">
          <div class="translation-card">
            <ThreeFeatures
              :imageSrc="require('@/assets/translation.png')"
              caption=" Translation "
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OutputOutputField from "@/components/OutputField.vue";
import DownloadAndReview from "@/components/DownloadAndReview.vue";
import ThreeFeatures from "@/components/ThreeFeatures.vue";
export default {
  components: {
    OutputOutputField,
    DownloadAndReview,
    ThreeFeatures,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
