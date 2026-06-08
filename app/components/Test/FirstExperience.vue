<script setup lang="ts">
import type { Mesh, PerspectiveCamera } from "three";

import { OrbitControls } from "@tresjs/cientos";
import { useLoop } from "@tresjs/core";
import { ref } from "vue";

const { camera } = storeToRefs(useGameStore());

// Reference to our donut mesh for animation
const cam = ref<PerspectiveCamera>();
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

onMounted(() => {
	if (cam.value) {
		console.log(cam.value.rotation);
		cam.value.lookAt(0, 0, 0);
	}
});
</script>

<template>
	<!-- Camera Setup -->
	<TresPerspectiveCamera
		ref="cam"
		:position="[camera.x, camera.y, camera.z]"
		:rotation="[camera.rx, camera.ry, camera.rz]"
	/>

	<TresAmbientLight />
	<TresDirectionalLight />

	<!-- For some reason, the things are not shown -->
	<!-- <OrbitControls :damping-factor="0.05" :enable-pan="false" :enable-rotate="false" :enable-zoom="false" /> -->
	<OrbitControls :damping-factor="0.05" />

	<!-- The Donut
	<TresMesh ref="donutRef" :position="[0, 2, 0]">
		<TresTorusGeometry :args="[1, 0.4, 16, 32]" />
		<TresMeshBasicMaterial color="#ff6b35" />
	</TresMesh> -->

	<ThreeHand />

	<!-- Visual Helpers -->
	<!-- <TresAxesHelper />
	<TresGridHelper /> -->
</template>
