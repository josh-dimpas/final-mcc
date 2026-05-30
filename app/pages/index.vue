<script setup lang="ts">
const { x, y } = useMouse();
</script>

<template>
	<div class="p-4">
		This is index {{ x }} {{ y }}
	</div>
</template>

<style lang="css" scoped></style>
