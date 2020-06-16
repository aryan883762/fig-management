'use strict';

export default {
  path: '/',
  meta: {
    auth: false
  },
  component: require('@/views/auth/Default.vue').default,
  children: [
    {
      path: '',
      name: 'login',
      meta: {
        auth: {
          roles: false,
          redirect: {}
        }

      },
      component: require('@/views/auth/Login.vue').default
    },
    {
      path: '/reset',
      name: 'reset',
      meta: {
        auth: false
      },
      component: require('@/views/auth/Reset.vue').default
    },
    {
      path: '/reset-password',
      name: 'reset_password',
      meta: {
        auth: false
      },
      component: require('@/views/auth/ResetPassword.vue').default
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        auth: false
      },
      component: require('@/views/auth/Signup.vue').default
    }
  ]
};

