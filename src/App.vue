<template lang="pug">
  v-app
    v-app-bar(app color="primary")
      v-spacer
      v-switch(
        v-model="switch1"
        :label="`暗色主題`"
        color="success"
        hide-details
        @click="switchMode"
      )
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
