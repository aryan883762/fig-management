"use strict";

import events from "./events";
import moment from "moment";

import Vue from "vue";

export default {
  install(Vue, options) {
    //events bus
    Vue.prototype.$events = events;

    Vue.prototype.$$moment = moment;

    Vue.prototype.$storage = window.localStorage;

    Vue.prototype.$vuescrollConfig = {
      bar: {
        background: "rgb(0, 0, 0, 0.4)",
      },
    };
    Vue.prototype.$setAppPosition = function(isOpened) {
      const app = document.getElementById("app");
      if (isOpened) {
        app.style.position = "fixed";
      } else {
        app.style.position = "relative";
      }
    };
    Vue.prototype.$closeDrawer = function() {
      const app = document.getElementById("app");
      app.click();
    };
  }
};
