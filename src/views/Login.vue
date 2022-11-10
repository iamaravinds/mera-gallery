<template>
	<div>
		<div class="login-form-container">
			<span class='login-head-info'>
				Lets get you logged in !!!
			</span>
			<div>
				<input 
					type="text"
					name="email"
					id="email"
					placeholder='Email id'
					class="login-input"
				>
			</div>
			<div>
				<input
					type="password"
					name="password"
					placeholder='Password'
					id="password"
					class="login-input"
				>
			</div>
			<div>
				<button
					type="submit"
					class="float-right btn-primary"
				>
				Login
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
