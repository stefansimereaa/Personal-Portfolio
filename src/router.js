import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter e createWebHistory da 'vue-router'
import AppHomepage from './components/AppHomepage.vue';
import Discord from './views/discord/Discord.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppHomepage },
    { path: '/discord', component: Discord }
  ]
});

export default router;
