<template>
	<div class="sidebar">
		SIDEBAR
		<div class="container">
			<div v-for="(item, index) in sidebarItems" :key="'sidebar-item-' + index">
				<SideBarItems :data="item" />
			</div>
		</div>
	</div>
</template>

<script setup>
import SideBarItems from '@/components/sidebar/SideBarItems.vue';
import { ref } from 'vue';
const sidebarItems = ref([
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'About',
		path: '/about'
	}
]);
</script>

<style lang="scss" scoped>
.container {
	border: 2px solid black;
	height: 100vp;
	width: 30%;
}
</style>