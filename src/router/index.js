import { createRouter, createWebHistory } from 'vue-router'

const routeOptions = [
  {path: '/', name: 'HomePage'},
  {path: '/about', name: 'AboutPage'},
  {path: '/dashboard', name: 'DashboardPage'},
  {path: '/login-service', name: 'AuthPage'},
  {path: '/user-login', name: 'UserLogin'},
  {path: '/admin-login', name: 'AdminLogin'},
  {path: '/user-register', name: 'UserRegister'},
  {path: '/moderator-register', name: 'ModeratorRegister'},
  {path: '/user-service', name: 'UserPage'},
  {path: '/user/profile', name: 'UserProfile'},
  {path: '/user/track-repair', name: 'UserTrackRepair'},
  {path: '/user/repair-list', name: 'UserRepairList'},
  {path: '/user/repair-notification', name:'UserRepairNotification'},
  {path: '/user/edit/repair-notification/:id', name:'UserEditRepairNotification'},
  {path: '/admin-service', name: 'AdminPage'},
  {path: '/moderator-service', name: 'ModeratorPage'},
  {path: '/admin/profile', name: 'AdminProfile'},
  {path: '/admin/repair-list', name:'AdminRepairList'},
  {path: '/admin/repair-list/department', name:'AdminRepairListDepartment'},
  {path: '/admin/manage-member', name: 'AdminManageMember'},
  {path: '/admin/edit/repair-status', name:'AdminEditRepairStatus'},
  {path: '/notification', name:'NotificationPage'},
  {path: '/preview/:id', name:'PreviewRepair'},
  {path: '/user/renew/repair-notification/:id', name:'RenewRepairNotification'}
];

const routes = routeOptions.map(route => {
  return { ...route,
    component: () =>
      import(`../views/${route.name}.vue`)
  }});

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router