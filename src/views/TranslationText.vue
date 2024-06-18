<template>
  <link rel="stylesheet" href="summ_text.css" />
  <p class="title" style="margin-left: -57%">Translation of text...</p>
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
        <router-link to="/summarization">
          <div class="summarize-card">
            <FeaturesCard
              :imageSrc="require('@/assets/Summary.png')"
              caption=" Summarize Text "
            />
          </div>
        </router-link>
        <router-link to="/audio">
          <div class="audio-card">
            <FeaturesCard
              :imageSrc="require('@/assets/audio.png')"
              caption=" Text to Audio "
              captionColor="#922C94"
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
