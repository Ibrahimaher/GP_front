<template>
  <div class="the-out">
    <div class="audio-container">
      <audio ref="audioPlayer" controls>
        <source :src="audioSource" type="audio/mpeg" />
        <!-- Add support for other audio file types if needed -->
      </audio>
    </div>
    <div class="output-field-wrapper">
      <OutputOutputField :audioSource="audioSource" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AudioFile",
  data() {
    return {
      audioSource: "",
    };
  },
  created() {
    this.fetchAudioFile();
  },
  methods: {
    fetchAudioFile() {
      axios
        .get("https://api.quran.com/api/v4")
        .then((response) => {
          this.loadAudioFile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching audio file:", error);
        });
    },
    loadAudioFile(file) {
      const url = URL.createObjectURL(file);
      this.audioSource = url;
      this.$nextTick(() => {
        this.$refs.audioPlayer.load();
      });
    },
  },
};
</script>
<style>
.the-out {
  top: 50px;
  left: 60px;
  margin-top: 5%;
}

.audio-container {
  /* قم بتخصيص أنماط العنصر الصوتي هنا */
  margin-left: -25%;

  width: 100%;
}

.output-field-wrapper {
  margin-right: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
