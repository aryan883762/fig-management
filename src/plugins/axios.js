'use strict';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios);

/* Integrating Axios */
axios.defaults.baseURL = process.env.VUE_APP_API_HOST + '/api/';

axios.interceptors.request.use(function (config) {

  if (config.url === 'https://maps.googleapis.com/maps/api/geocode/json') {
    //if google don't process
    config.headers = [];
    return config;
  }

  if (window.localStorage.getItem('active-company'))
    config.headers['x-company'] = window.localStorage.getItem('active-company');

  if (window.localStorage.getItem('masquerade-id'))
    config.headers['masquerade-id'] = window.localStorage.getItem('masquerade-id');

  //TODO: THIS IS A TEMPORAL WAY OF ADDING  companyId to all requests so long as its a post or put
  if ((config.method === 'post' || config.method === 'put') && Vue.prototype.$auth.user().company) {
    //only do this if there's a data object on config
    if (config.data) {
      // if super admin then we don't change it
      if (!(Vue.prototype.$ability.can('manage', 'role_super_admin') && config.data.companyId)) {
        config.data.companyId = Vue.prototype.$auth.user().company.id;
      }
    }
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.config.method === 'post' || response.config.method === 'put' || response.config.method === 'patch') {

  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
