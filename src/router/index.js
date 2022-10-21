import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/Login.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue'),
		},
	],
});

export default router;
