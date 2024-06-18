<template>
  <link rel="stylesheet" href="trans_text_with_face.css" />
  <p class="title">Translation text with face expression ...</p>
  <div class="container">
    <div class="content">
      <div class="output-buttons">
        <div class="output-field-wrapper">
          <OutputOutputField />
        </div>
        <div class="download-review-wrapper">
          <DownloadAndReview />
        </div>
      </div>
      <div class="all-cards">
        <router-link to="/summarization-w-face">
          <div class="summarize-card">
            <FeaturesCard
              :imageSrc="require('@/assets/Summary.png')"
              caption=" Summarize Text with Face Expression "
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
import OutputOutputField from "@/components/OutputField.vue";
import FeaturesCard from "@/components/FeaturesCard.vue";
import DownloadAndReview from "@/components/DownloadAndReview.vue";

export default {
  components: {
    OutputOutputField,
    FeaturesCard,
    DownloadAndReview,
  },
};
</script>
