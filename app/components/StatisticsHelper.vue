<script setup lang="ts">
const { scroll } = storeToRefs(useGameStore());
const DEV = import.meta.dev;
</script>

<template>
	<div v-if="DEV" class="bottom-0 left-0 z-50 absolute bg-red-500 p-4">
		{{ scroll }}
	</div>
</template>

<style lang="css" scoped>

</style>
