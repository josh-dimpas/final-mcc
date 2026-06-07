<script setup lang="ts">
const gamestore = useGameStore();
const { name } = storeToRefs(gamestore);
</script>

<template>
	<div v-auto-animate class="relative w-screen h-screen overflow-hidden">
		<div v-if="name">
			<Content />
			<Progress />
			<!-- <TresCanvas window-size>
				<FirstExperience />
			</TresCanvas> -->
		</div>
		<NameDialog v-else />
		<!-- <StatisticsHelper /> -->
	</div>
</template>

<style lang="css" scoped></style>
