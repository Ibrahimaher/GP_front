<template>
  <link rel="stylesheet" href="features_home.css" />
  <div class="container">
    <div class="content">
      <div class="all-cards">
        <router-link to="/translation">
          <div class="summarize-card">
            <FeaturesCard
              :imageSrc="require('@/assets/translation.png')"
              caption=" Translation "
            />
          </div>
        </router-link>
        <router-link to="/audio">
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
import FeaturesCard from "@/components/FeaturesCard.vue";

export default {
  components: {
    FeaturesCard,
  },
};
</script>
