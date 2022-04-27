<template lang="pug">
  v-app-bar(app, color="primary")
    v-spacer
    v-switch(
      v-model="switch1",
      :label="`暗色主題`",
      color="success",
      hide-details,
      @click="switchMode"
    )
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      switch1: this.$vuetify.theme.dark,
    };
  },
  methods: {
    switchMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
