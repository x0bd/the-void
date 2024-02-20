import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,md,mdx}",
		"./components/**/*.{ts,tsx,md,mdx}",
		"./app/**/*.{ts,tsx,md,mdx}",
		"./src/**/*.{ts,tsx,md,mdx}",
	],

	theme: {
		extend: {
			gridTemplateColumns: {
				gallery: "repeat(auto-fit, minmax(300px, 1fr))",
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
