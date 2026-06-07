<script setup lang="ts">
import { get } from "@vueuse/core";

const NUM_DOTS = 7;
const DETECTION_PADDING = 10;

const DOTS = [
	"Welcome",
	"My Story",
	"Expectations",
	"Turning Point",
	"Favorite Thing",
	"Key Lessons",
	"Final Reflections"
];

const { scroll, maxScroll } = storeToRefs(useGameStore());

const container = useTemplateRef("container");

const { width: containerWidth } = useElementSize(container);
const { height: windowHeight } = useWindowSize();

const thumbWidth = computed(() => get(windowHeight) / get(maxScroll) * get(containerWidth));
const thumbOffset = computed(() => get(scroll) / get(maxScroll) * get(containerWidth));
const segmentWidth = computed(() => get(containerWidth) / NUM_DOTS);

function handleDotClick(index: number) {
	console.log(index);
	if (index === NUM_DOTS + 1) return;

	const target = (index - 1) / NUM_DOTS * get(maxScroll);
	scroll.value = target;
}
</script>

<template>
	<div class="top-0 right-0 left-0 fixed flex justify-center">
		<div ref="container" class="relative mt-8 w-4xl">
			<div
				class="top-0 bottom-0 absolute bg-white m-auto rounded-sm h-8"
				:style="{ width: `${thumbWidth}px`, left: `${thumbOffset}px` }"
			/>
			<!-- Text -->
			<div
				v-for="(section, i) in DOTS"
				:key="section"
				class="top-0 bottom-0 absolute flex justify-center items-center m-auto h-8 font-serif text-xl uppercase cursor-pointer mix-blend-difference"
				:style="{
					width: `${thumbWidth}px`,
					left: `${(i) * segmentWidth}px`
				}"
				@click="handleDotClick(i + 1)"
			>
				{{ section }}
			</div>
			<!-- DOTS -->
			<!-- <div
				v-for="i in NUM_DOTS + 1"
				:key="i"
				class="absolute border rounded-full size-4 -translate-x-2 dot"
				:class="{
					'bg-white': ((i - 2) * segmentWidth) <= thumbOffset + DETECTION_PADDING && ((i - 1) * segmentWidth) >= thumbOffset - DETECTION_PADDING
				}"
				:style="{ left: `${(i - 1) * segmentWidth}px` }"
				@click="handleDotClick(i)"
			/> -->
		</div>
	</div>
</template>

<style lang="css" scoped>
</style>
