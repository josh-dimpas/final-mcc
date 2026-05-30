<script setup lang="ts">
import { env } from "~/env";

const title = env.VITE_APP_NAME;
const description = `My final output for opswerks-mcc`;

useHead({
	title,
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
	link: [{ rel: "icon", href: "/favicon.ico" }],
	htmlAttrs: { lang: "en" }
});

useSeoMeta({ title, description, ogTitle: title, ogDescription: description });
</script>

<template>
	<Html class="overflow-x-hidden">
		<Body class="font-sans antialiased">
			<UApp :tooltip="{ delayDuration: 0 }">
				<NuxtLoadingIndicator color="var(--ui-primary)" />
				<NuxtLayout>
					<NuxtPage />
				</NuxtLayout>
			</UApp>
		</Body>
	</Html>
</template>
