<script setup lang="ts">
import type { Mesh } from "three";
import { MeshLambertMaterial, Vector3 } from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const { hand } = storeToRefs(useGameStore());

const loader = new DRACOLoader();
loader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

// const geomPath = "models/hand.obj";
// const mtlPath = "models/hand.mtl";
const modelPath = "models/Hand.glb";

const { state: obj } = useLoader(GLTFLoader, modelPath, {
	extensions: (loader) => {
		if (loader instanceof GLTFLoader) {
			loader.setDRACOLoader(loader);
		}
	}

});

const scene = computed(() => obj.value?.scene);
const graph = useGraph(scene);

const NODE_FIELD = "Node-Mesh";
const nodes = computed(() => graph.value?.nodes);

watch(nodes, (value) => {
	const mesh = value?.[NODE_FIELD];
	if (!mesh) return;

	mesh.material = new MeshLambertMaterial({ color: "#ff6b35" });

	mesh.lookAt(7, 1000, 10);
	console.log(mesh.rotation);
});

const { onBeforeRender } = useLoop();
const group = ref<Mesh>();

onBeforeRender(({ elapsed }) => {
	if (group.value) {
		group.value.rotation.x = Math.sin(elapsed * 2) * 0.5;
		group.value.rotation.z = Math.sin(elapsed * 2) * 0.5;
	}
});
</script>

<template>
	<!-- <TresMesh>
		<TresMeshBasicMaterial color="#ff6b35" />
		<primitive v-if="nodes?.[NODE_FIELD]" attach="geometry" :object="nodes?.[NODE_FIELD]?.geometry" />
		<primitive v-if="nodes?.[NODE_FIELD]" attach="material" :object="nodes?.[NODE_FIELD]?.material" />
	</TresMesh> -->
	<TresMesh ref="group" :position="[hand.x, hand.y, hand.z]">
		<primitive v-if="nodes?.[NODE_FIELD]" :look-at="[7, 1000, 10]" :object="nodes?.[NODE_FIELD]" />
	</TresMesh>
</template>

<style lang="css" scoped>

</style>
