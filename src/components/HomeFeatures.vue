<template>
  <link rel="stylesheet" href="HomeFeatures.css" />
  <div class="features-card-container">
    <div class="features-card">
      <div class="image-container">
        <img :src="this.imageSrc" alt="Feature " />
      </div>
      <div class="caption">{{ caption }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesCard",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>
