<template>
  <link rel="stylesheet" href="summ_text_with_face.css" />
  <p class="title">Summarizing text with face expression ...</p>
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
        <router-link to="/translation-w-face">
          <div class="summarize-card">
            <FeaturesCard
              :imageSrc="require('@/assets/translation.png')"
              caption=" Translation "
            />
          </div>
        </router-link>
        <router-link to="/audio-output-with-face">
          <div class="audio-card">
            <FeaturesCard
              :imageSrc="require('@/assets/audio.png')"
              caption=" Text to Audio "
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
import FeaturesCard from "@/components/FeaturesCard.vue";
import DownloadAndReview from "@/components/DownloadAndReview.vue";

export default {
  name: "OutputComponent",

  components: {
    OutputOutputField,
    FeaturesCard,
    DownloadAndReview,
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
