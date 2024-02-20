import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,md,mdx}",
		"./components/**/*.{ts,tsx,md,mdx}",
		"./app/**/*.{ts,tsx,md,mdx}",
		"./src/**/*.{ts,tsx,md,mdx}",
	],
	prefix: "",

	theme: {
		extend: {
			colors: {
				"d/bg": "#111111",
				"d/primary": "#eeeeee",
				"d/secondary": "#999999",
				"d/tertiary": "#555555",
				"l/bg": "#eeeeee",
				"l/primary": "#111111",
				"l/secondary": "#555555",
				"l/tertiary": "#999999",
			},
			textColor: {
				main: "rgb(var(--color-text-main) / <alpha-value>)",
			},
			backgroundColor: {
				main: "rgb(var(--color-bg-main) / <alpha-value>)",
				muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
			},
			borderColor: {
				main: "rgb(var(--color-border-main) / <alpha-value>)",
			},
		},
	},

	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
} satisfies Config;

export default config;
