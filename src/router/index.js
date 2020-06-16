import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from './auth.js';
import Error from './error.js';
import Anonymous from './anonymous.js';
import Customer from './customer.js';
import Team from './team.js';
import Admin from './admin.js';
import SuperAdmin from './superadmin.js';

Vue.use(VueRouter);

const routes = [
  Auth,
  Error,
  // Anonymous,
  // Customer,
  // Team,
  Admin,
  // SuperAdmin
];

const router = new VueRouter({
  mode: 'history',
  routes
});
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
      appLoading.style.display = "none"; 
  }
});
export default router;
