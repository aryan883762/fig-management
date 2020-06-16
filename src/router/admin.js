'use strict';

import { superAdminRoles } from '@/utils/auth/ability.js';

export default {
  path: '/admin/dashboard',
  meta: {
    auth: superAdminRoles
  },
  component: require('@/components/layout/Main.vue').default,
  children: [
    {
      path: '/admin',
      redirect: '/admin/dashboard'
    },
    {
      path: '',
      name: 'admin_dashboard',
      component: require('@/views/admin/Dashboard.vue').default
    }
  ]
};


