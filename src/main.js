import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from "moment";
// Feather font icon
import './assets/css/iconfont.css'
// Material Icons
import 'material-icons/iconfont/material-icons.css'
// Styles: SCSS
import './assets/scss/main.scss'
// Vuesax
import "./plugins/vuesax.js";
import "./plugins/window-resize";
import "./plugins/vueScroll";
import "./plugins/flatDatePicker"
import "./plugins/veeValidate"
import "./filters/filters";

// Globally Registered Components
import './plugins/globalComponents'
import smoothscroll from "smoothscroll-polyfill";
// kick off the polyfill!
smoothscroll.polyfill();
// import './plugins/axios.js';
// import './plugins/vue-casl.js';
// import './plugins/vue-auth.js';
// import './plugins/subdomain-handler.js';
import Utils from "./utils";
Vue.use(Utils);
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
