import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#8bc34a",
        secondary: "#4caf50",
        anchor: "#cddc39",
      },
      dark: {
        primary: "#4caf50",
        secondary: "#8bc34a",
        accent: "#ff5722",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#FFFFFF",
      },
    },
  },
});

export default vuetify;
