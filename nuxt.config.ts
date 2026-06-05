import { templateCompilerOptions } from "@tresjs/core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@nuxt/hints",
		"@nuxt/eslint",
		"@nuxt/image",
		"@compodium/nuxt",
		"@hypernym/nuxt-anime",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"@bubblesortt/nuxt-es-toolkit",
		"@tresjs/nuxt",
		"@formkit/auto-animate/nuxt"
	],
	ssr: false,
	devtools: { enabled: false },

	css: ["~/assets/main.css"],

	experimental: {
		typedPages: true
	},
	compatibilityDate: "2025-07-15",

	vite: {
		vue: { ...templateCompilerOptions },
		optimizeDeps: {
			include: [
				"@vue/devtools-core",
				"@vue/devtools-kit",
				"@tresjs/cientos",
				"@tresjs/core",
				"three",
				"zod"
			]
		}
	},

	eslint: {
		config: {
			standalone: false
		}
	}
});
