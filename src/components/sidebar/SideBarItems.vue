<template>
	<div class="sidebar-item">
		<RouterLink :to="data.path">{{data.label}}</RouterLink>
	</div>
</template>

<script setup>
defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>

</style>