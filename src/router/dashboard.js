export default [
  {
    path: 'dashboard',
    name: 'VDashboardPage',
    component: () => import('../pages/VDashboardPage'),
  },
  {
    path: 'dashboard/card-create',
    name: 'VDashboardCardCreatePage',
    component: () => import('../pages/VDashboardCardCreatePage'),
  },
];
