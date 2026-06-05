import { acceptHMRUpdate, defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {
	const name = ref<string>();
	const scroll = ref<number>(0);

	return { name, scroll };
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot));
}
