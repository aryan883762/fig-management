import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //Vuesax styles
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "rgb(13, 97, 237)",
      secondary: "#9C27B0",
      accent: "#7b32d6",
      info: "#24a0ed",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)",
    },
  },
}); // Vuesax