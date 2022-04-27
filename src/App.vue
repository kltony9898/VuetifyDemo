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
export default {
  name: "App",

  data() {
    return {
      switch1: this.$vuetify.theme.dark,
    };
  },
  mounted() {
    console.log(this.$vuetify.theme);
  },
  methods: {
    switchMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
