<script setup lang="ts">
const { name } = useGameStore();
</script>

<template>
	<div class="min-h-screen snap-center">
		<div class="h-[calc(50vh-6rem)]" />
		<h1 class="-ml-1">
			Hello <span class="capitalize">{{ name }}</span>
		</h1>
		<p>
			Nice to meet you.
			<br>
			<br>
			This page is dedicated for you, who's just starting an internship at <span class="text-success">Opswerks</span>
			<br>
			from someone who came before.
		</p>
		<div class="pt-6 text-emerald-300">
			- Josh Kenshi M. Dimpas
		</div>
	</div>
</template>

<style lang="css" scoped>

</style>
