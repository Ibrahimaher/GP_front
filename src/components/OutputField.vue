<template>
  <div class="the-out">
    <input type="file" @change="handleFileChange" accept=".txt" />
    <div class="text-container">
      <div class="card">
        <pre class="file-content">{{ fileContent }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputComponent",
  props: {
    fileContent: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.$emit("update:fileContent", reader.result); // Emit the updated content
      };
      reader.readAsText(file);
    },
  },
};
</script>

<style>
.the-out {
  right: 60px;
  margin-right: 50pt;
  top: 100;
  height: 80%;
  margin-top: -20%;
}

.text-container {
  text-align: left;
  /* Customize the container styles here */
}

.card {
  background-color: #797777;
  padding: 10px;
  border-radius: 10px;
  width: 580px;
  height: 197px;
  flex-shrink: 0;
  overflow: auto;
  margin-top: -8%;
  margin-left: 3%;
}

.file-content {
  color: white;
  font-family: Itim;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
/* Small devices (up to 576px) */
@media screen and (max-width: 576px) {
  .the-out {
    margin-right: 10px;
  }

  .card {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
}

/* Medium devices (from 576px to 768px) */
@media screen and (min-width: 576px) and (max-width: 768px) {
  .the-out {
    margin-right: 20px;
  }

  .card {
    width: 200px;
    height: auto;
    margin-bottom: 30px;
  }
}

/* Large devices (from 768px to 992px) */
@media screen and (min-width: 768px) and (max-width: 992px) {
  .the-out {
    margin-right: 30px;
  }
  .card {
    width: 300px;
    height: auto;
    margin-bottom: 50px;
  }
}
</style>
