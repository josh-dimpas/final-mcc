// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	antfu({
		// ...@antfu/eslint-config options
		vue: true,
		typescript: true,
		stylistic: {
			indent: "tab",
			semi: true,
			quotes: "double"
		},
		rules: {
			"max-len": ["warn", { code: 100, ignoreUrls: true }],
			curly: "off",
			"no-console": "off",
			"no-new-func": "off",
			"style/semi": ["error", "always"],
			"style/indent": ["error", "tab"],
			"style/quote-props": ["warn", "as-needed"],
			"style/comma-dangle": ["warn", "never"],
			"style/brace-style": ["warn", "1tbs"],
			"style/arrow-parens": ["error", "always"],
			"vue/comma-dangle": ["warn", "never"],
			"antfu/top-level-function": "off",
			"antfu/if-newline": "off",
			"new-cap": "off",
			"node/prefer-global/process": ["off"],
			"jsonc/indent": "off",
			"ts/no-namespace": "off"
		}
	}),

	{
		files: ["**/*.vue"],
		rules: {
			"style/index": "off",
			// Separate each attribute per line
			"vue/multiline-html-element-content-newline": [
				"error",
				{
					ignoreWhenEmpty: true,
					ignores: ["pre", "textarea"],
					allowEmptyLines: false
				}
			],
			// Order attributes
			"vue/attributes-order": [
				"error",
				{
					order: [
						"DEFINITION",
						"LIST_RENDERING",
						"CONDITIONALS",
						"RENDER_MODIFIERS",
						"GLOBAL",
						["UNIQUE", "SLOT"],
						"OTHER_DIRECTIVES",
						["ATTR_SHORTHAND_BOOL", "ATTR_STATIC"],
						"ATTR_DYNAMIC",
						"TWO_WAY_BINDING",
						"EVENTS",
						"CONTENT"
					],
					alphabetical: true,
					sortLineLength: false
				}
			]

		}
	}
);
