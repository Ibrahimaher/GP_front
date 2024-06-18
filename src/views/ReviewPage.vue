<template>
  <link rel="stylesheet" href="review_style.css" />
  <div class="ww">
    <h1>Review</h1>
    <p>Rating Us</p>

    <img src="../assets/unsplash_-fRAIQHKcc0.png" alt="" />

    <div class="rating">
      <input
        type="radio"
        id="star1"
        name="rating"
        value="1"
        v-model="star1"
      /><label for="star1"></label>
      <input
        type="radio"
        id="star2"
        name="rating"
        value="2"
        v-model="star2"
      /><label for="star2"></label>
      <input
        type="radio"
        id="star3"
        name="rating"
        value="3"
        v-model="star3"
      /><label for="star3"></label>
      <input
        type="radio"
        id="star4"
        name="rating"
        value="4"
        v-model="star4"
      /><label for="star4"></label>
      <input
        type="radio"
        id="star5"
        name="rating"
        value="5"
        v-model="star5"
      /><label for="star5"></label>
    </div>
    <p class="your-comm">Add Your Comment Here :</p>
    <input
      class="inp1"
      v-model="user_comment"
      type="text"
      placeholder="     .............."
    />
    <button class="send">Send</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_comment: "",
      star1: "",
      star2: "",
      star3: "",
      star4: "",
      star5: "",
    };
  },
};
</script>
