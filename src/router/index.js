// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import AddIP from '@/components/AddIP.vue';
import UpdateIP from '@/components/UpdateIP.vue';
import AuditLog from '@/components/AuditLog.vue';

Vue.use(Router);

const routes = [
    { path: '/login', component: Login },
    { path: '/add-ip', component: AddIP },
    { path: '/update-ip', component: UpdateIP },
    { path: '/audit-log', component: AuditLog }
];

export default new Router({ routes });
