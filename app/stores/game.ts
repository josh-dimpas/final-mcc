import { get } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";

const PADDING = 10;

enum Page {
	Welcome,
	MyStory,
	Expectations,
	Turning,
	Favorite,
	KeyLesson,
	Final
}

export const useGameStore = defineStore("game", () => {
	const name = ref<string>();

	const scroll = ref<number>(0);
	const maxScroll = ref<number>(1);

	const { height } = useWindowSize();

	const page = computed(() => ~~((get(scroll) + PADDING) / get(height)));
	const pageProgress = computed(() => (((get(scroll)) / get(height)) - ~~(get(scroll) / get(height))));

	const camera = reactive({
		x: 7,
		y: 7,
		z: 7,

		rx: -0.7853981633974483,
		ry: 0.6154797086703874,
		rz: 0.5235987755982989
	});

	// Individual Model Values
	const hand = reactive({
		x: 6,
		y: 4,
		z: 4,

		rx: -1.5637964411248688,
		ry: 0.006999714184732888,
		rz: 0.7853736645978795
	});

	// watch([page, pageProgress], ([n, pn], [p, pp]) => {
	// 	switch (n) {
	// 		case Page.Welcome:
	// 			useAnimate(camera, { y: 7 });
	// 			break;
	// 		case Page.MyStory:
	// 			useAnimate(camera, { y: 0 });
	// 			break;
	// 	}
	// });

	// watch(pageProgress, (v) => {
	// 	const HAND_STRT = 8;
	// 	const HAND_END = 4;
	// 	const p = page.value;

	// 	if (p === Page.Welcome) {
	// 		hand.y = lerp(HAND_END, HAND_STRT, v);
	// 	} else if (p === Page.MyStory) {
	// 		// Move hands upwards
	// 		hand.y = lerp(HAND_STRT, HAND_END, v);
	// 	}
	// });

	return { name, page, pageProgress, scroll, maxScroll, hand, camera };
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot));
}
