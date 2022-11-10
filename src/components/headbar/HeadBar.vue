<template>
	<div class="header-container">
		<div class="head-title">
			<h1>Mera Gallery</h1>
		</div>
		<div class='search-box'>
			<Search 
				:category="[
					'Pokemon',
					'Dragon Ball Z',
					'Naruto',
				]"
				@search='alertItem'
			/>
		</div>
		<div class="action-buttons">
			<!-- <RouterLink to="/login">
				<button class='btn-primary'>Login</button>
			</RouterLink> -->
		</div>
	</div>
</template>

<script setup>
import Search from "./Search.vue";
</script>

<style lang="scss" scoped>

</style>