<template>
  <link rel="stylesheet" href="DownloadAndReview.css" />
  <div class="the-button">
    <div class="button-wrapper">
      <button class="download-button">
        <span class="button-label">Download</span>
      </button>
      <router-link to="/review">
        <button class="review-button">
          <span class="button-label">Review</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheButton",
  data() {
    return {
      name: "ibrahim fight",
    };
  },
};
</script>
