<script setup lang="ts">
import { vAutoAnimate } from "@formkit/auto-animate";

const LONG_NAME_THRESHOLD = 12;

const gameStore = useGameStore();

const name = ref("");
const nameTooLong = computed(() => name.value?.length >= LONG_NAME_THRESHOLD);

function setName() {
	gameStore.name = name.value;
}

defineShortcuts({
	enter: setName
});
</script>

<template>
	<div class="flex flex-col justify-center items-center w-screen h-screen">
		<div class="mb-4 border-b">
			<input class="outline-0 w-300 font-bold text-9xl text-center uppercase" type="text" v-model="name" @keypress.enter="setName">
		</div>
		<h1 v-auto-animate class="w-full font-serif text-8xl text-center">
			What is your <span v-if="nameTooLong" class="text-primary">First</span> name
		</h1>

		<button v-if="name" id="start-btn" class="absolute translate-y-60 animate-bounce" size="xl" @click="setName">
			Press Enter To Start
		</button>
	</div>
</template>

<style scoped lang="css">
#start-btn {
	padding: 1rem 1.5rem;
	border-radius: 1rem;
	background: #0d542b;
	box-shadow:  10px 10px 20px #093c1f,
             -10px -10px 20px #116c37;

	&:hover {
		box-shadow:  6px 6px 12px #093c1f,
             -6px -6px 12px #116c37;
	}
}
</style>
