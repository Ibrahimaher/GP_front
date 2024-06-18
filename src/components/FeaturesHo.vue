<template>
  <link rel="stylesheet" href="featuresHome.css" />
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
  name: "FeaturesHo",
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

<style>
.features-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.features-card {
  display: flex;
  width: 250px;
  height: 250px;
  padding: 20px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 50px;
  border: 5px solid var(--purple, #922c94);
  cursor: pointer;
}
.features-card:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}

.image-container {
  width: 230px;
  height: 150px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50pt;
}

.caption {
  font-family: Itim;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #922c94;
  text-decoration: none;
}
</style>
