<template>
  <link rel="stylesheet" href="adminpage.css" />
  <div class="Background">
    <div class="admain">
      <TheNav />
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/AdmainNav.vue";
export default {
  name: "admain_page",
  components: {
    TheNav,
  },
};
</script>
