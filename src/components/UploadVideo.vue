<template>
  <div class="uploadVideo">
    <label for="file-input" class="file-label">
      <img src="@/assets/upload.png" alt="" class="upload-icon" />
    </label>
    <input
      type="file"
      @change="handleFileSelect"
      accept="video/*"
      id="file-input"
      style="display: none"
    />
  </div>
</template>

<script>
export default {
  name: "UploadVideo",
  data() {
    return {
      uploadIcon: "@/assets/upload.png",
    };
  },
  methods: {
    handleFileSelect(event) {
      const file = event.target.files[0];
      // Do something with the selected file
      console.log(file);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
.uploadVideo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;
}
.file-label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.upload-icon {
  border: 5px solid var(--purple, rgba(146, 44, 148, 1));
  border-radius: 60px;
  width: 450px;
  height: 250px;
  margin-bottom: -170px;
}

/* Responsive styles */

/* lab 1024 */
@media (max-width: 1024px) {
  .uploadVideo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 50px;
    margin-left: 0%;
  }
  .upload-icon {
    border: 5px solid var(--purple, rgba(146, 44, 148, 1));
    border-radius: 60px;
    width: 350px;
    height: 250px;
    margin-bottom: -170px;
  }
}

/* [tablet] Small devices (max-width: 767px) */
@media (max-width: 768px) {
  .upload-icon {
    border: 2px solid var(--purple, rgba(146, 44, 148, 1));
    width: 300px;
    height: 200px;
  }

  .uploadVideo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
/* mobile 425 */
@media (max-width: 425px) {
  .upload-icon {
    border: 2px solid var(--purple, rgba(146, 44, 148, 1));
    width: 250px;
    height: 180px;
  }

  .uploadVideo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
/* [mobile] Small devices (max-width: 767px) 
  @media (min-width: 320px) and (max-width: 425px) {
    .upload-icon {
      width: 150px;
      height: 100px;
    }
  
    .uploadVideo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 50px;
    }
  }
  */
</style>
