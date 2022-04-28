<template lang="pug">
  v-app
    HeaderBar
    v-main
      router-view
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
export default {
  name: "App",
  components: { HeaderBar },
};
</script>
