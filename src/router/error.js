'use strict';

export default {
  // path: '*',
  path: '/error',
  meta: {
    auth: false
  },
  component: require('@/views/error/Default.vue').default,
  children: [
    {
      path: '',
      name: 'error-404',
      component: require('@/views/error/404.vue').default
    },
    {
      path: '/403',
      name: 'error-403',
      component: require('@/views/error/403.vue').default
    },
    {
      path: '/500',
      name: 'error-500',
      component: require('@/views/error/500.vue').default
    },
    {
      path: '/plan-error',
      name: 'plan_error',
      component: require('@/views/error/PlanError.vue').default
    }
  ]
};

