<script setup lang="ts">
import type { Mesh } from "three";
import { OrbitControls } from "@tresjs/cientos";
import { useLoop } from "@tresjs/core";
import { ref } from "vue";

// Reference to our donut mesh for animation
const donutRef = ref<Mesh>();

// Animation loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
	const rotation = donutRef.value?.rotation;
	if (rotation) {
		// Rotate the donut on both X and Y axes
		rotation.x = elapsed * 0.5;
		rotation.y = elapsed * 0.3;
	}
});
</script>

<template>
	<!-- Camera Setup -->
	<TresPerspectiveCamera
		:look-at="[0, 0, 0]"
		:position="[7, 7, 7]"
	/>
	<!-- For some reason, the things are not shown -->
	<!-- <OrbitControls :damping-factor="0.05" :enable-pan="false" :enable-rotate="false" :enable-zoom="false" /> -->
	<OrbitControls :damping-factor="0.05" />

	<!-- The Donut -->
	<TresMesh ref="donutRef" :position="[0, 2, 0]">
		<TresTorusGeometry :args="[1, 0.4, 16, 32]" />
		<TresMeshBasicMaterial color="#ff6b35" />
	</TresMesh>

	<!-- Visual Helpers -->
	<TresAxesHelper />
	<TresGridHelper />
</template>
