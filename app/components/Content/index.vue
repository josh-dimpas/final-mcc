<script setup lang="ts">
const gameStore = useGameStore();
const { scroll, maxScroll } = storeToRefs(gameStore);

const content = useTemplateRef("content");

const { y } = useScroll(content, { behavior: "smooth" });

syncRef(y, scroll);

onMounted(() => {
	if (!content.value) return;
	maxScroll.value = content.value.scrollHeight;
});
</script>

<template>
	<div id="content" ref="content" class="right-0 left-0 z-50 absolute flex-none m-auto px-8 h-screen overflow-y-auto snap-center snap-mandatory snap-y container">
		<ContentIntroduction />
		<ContentWelcome />
		<ContentCulture />
		<ContentTurningPoint />
		<ContentHighlight />
		<ContentKeyLesson />
		<ContentFinalReflections />
	</div>
</template>

<style lang="css" scoped>
/**Hide Scrollbar */
#content {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    ::before, ::after {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 200px;
        background-image: linear-gradient(to bottom, var(--background) 10%, transparent);
    }

    ::after {
        top: unset;
        bottom: 0 !important;
        background-image: linear-gradient(to top, var(--background) 10%, transparent);
    }
}
</style>
