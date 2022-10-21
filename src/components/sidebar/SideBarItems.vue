<template>
	<div>
		{{data.label}}

	</div>
</template>

<script setup>
defineProps({
	data: {
		type: Array,
		required: true,
	},
});
</script>

<style lang="scss" scoped>

</style>