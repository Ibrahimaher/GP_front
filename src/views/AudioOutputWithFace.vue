<template>
  <link rel="stylesheet" href="audio_out_with_face.css" />
  <p class="title">Converting text to audio...</p>
  <div class="container">
    <div class="content">
      <div class="output-buttons">
        <div class="output-field-wrapper">
          <AudioOutput />
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
        <router-link to="/translation">
          <div class="audio-card">
            <FeaturesCard
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
import AudioOutput from "@/components/AudioOutput.vue";
import FeaturesCard from "@/components/FeaturesCard.vue";
import DownloadAndReview from "@/components/DownloadAndReview.vue";

export default {
  components: {
    AudioOutput,
    FeaturesCard,
    DownloadAndReview,
  },
};
</script>
