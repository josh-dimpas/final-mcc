<script setup lang="ts">
const gamestore = useGameStore();
const { name } = storeToRefs(gamestore);
</script>

<template>
	<div v-auto-animate class="relative w-screen h-screen overflow-hidden">
		<div v-if="name">
			<!-- <div class="absolute w-screen h-screen">
				<TresCanvas clear-color="#0d542b">
					<TestFirstExperience />
				</TresCanvas>
			</div> -->
			<Content />
			<Progress />
		</div>
		<NameDialog v-else />
		<!-- <StatisticsHelper /> -->
	</div>
</template>
