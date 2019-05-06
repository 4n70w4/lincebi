import Vue from 'vue';
import Router from 'vue-router';

import Administration from '@/views/Administration.vue';
import Home from '@/views/Home.vue';
import Perspective from '@/views/Perspective.vue';
import Profile from '@/views/Profile.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'default',
			redirect: {
				name: 'perspective',
				params: { perspective: 'sthome.perspective' }
			}
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile
		},
		{
			path: '/administration',
			name: 'administration',
			component: Administration
		},
		{
			path: '/p/:perspective',
			name: 'perspective',
			component: Perspective,
			props: route => ({
				perspective: route.params.perspective
			})
		},
		{
			path: '/login',
			name: 'login',
			beforeEnter() {
				location.href = '../Login';
			}
		},
		{
			path: '/logout',
			name: 'logout',
			beforeEnter() {
				location.href = '../Logout';
			}
		}
	]
});
