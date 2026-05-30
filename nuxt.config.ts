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
		"@bubblesortt/nuxt-es-toolkit"
	],
	ssr: false,
	devtools: { enabled: true },

	css: ["~/assets/main.css"],

	experimental: {
		typedPages: true
	},
	compatibilityDate: "2025-07-15",

	vite: {
		optimizeDeps: {
			include: ["@vue/devtools-core", "@vue/devtools-kit"]
		}
	},

	eslint: {
		config: {
			standalone: false
		}
	}
});
