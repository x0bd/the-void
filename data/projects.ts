type techs = {
	[key: string]: string;
};

export const technologies: techs = {
	astro: "devicon-plain:astro",
	nextjs: "akar-icons:nextjs-fill",
	tailwind: "mdi:tailwind",
	remix: "simple-icons:remix",
	stripe: "fa-brands:stripe",
	figma: "ph:figma-logo",
	svelte: "simple-icons:svelte",
	prisma: "simple-icons:prisma",
	rust: "simple-icons:rust",
	supabase: "ri:supabase-fill",
	webgl: "simple-icons:webgl",
	threejs: "logos:threejs",
	p5js: "simple-icons:p5dotjs",
	framermotion: "tabler:brand-framer-motion",
	jotai: "logos:jotai",
	electron: "simple-icons:electron",
	sass: "simple-icons:sass",
	vite: "simple-icons:vite",
	bun: "devicon-plain:bun",
	planetscale: "skill-icons:planetscale-light",
	vercel: "akar-icons:vercel-fill",
	typeScript: "simple-icons:typescript",
	javaScript: "simple-icons:javascript",
	blender: "simple-icons:blender",
	shadcn: "simple-icons:shadcnui",
	react: "simple-icons:react",
	socketio: "cib:socket-io",
	iced: "simple-icons:iced",
	rocket: "charm:rocket",
	drizzle: "simple-icons:drizzle",
	wasm: "simple-icons:webassembly",
	leptos: "simple-icons:leptos",
	zod: "simple-icons:zod",
	radix: "simple-icons:radixui",
	node: "akar-icons:node-fill",
	express: "simple-icons:express",
	tauri: "simple-icons:tauri",
	mdx: "simple-icons:mdx",
	spotify: "bi:spotify",
};

export type Project = {
	title: string;
	techs: string[];
	description: string;
	promoted: boolean;
	link: string;
	isComingSoon?: boolean;
	wip?: boolean;
};

const projects: Project[] = [
	{
		title: "celeste",
		techs: ["vite", "typeScript"],
		description: "a toy mvc client-side web framework",
		link: "github.com/x0bd/celeste",
		promoted: true,
		wip: true,
	},

	{
		title: "palegen",
		techs: ["nextjs", "shadcn", "vercel", "javaScript"],
		description: "an app to quickly generate color palettes from images",
		link: "github.com/x0bd/palegen",
		promoted: true,
	},
	{
		title: "doodle",
		techs: ["react", "vite", "tailwind", "electron", "typeScript"],
		description: "a beautifully crafted markdown note taking app",
		link: "github.com/x0bd/doodle",
		promoted: true,
	},
	{
		title: "the void",
		techs: ["nextjs", "tailwind", "typeScript", "mdx", "zod", "vercel"],
		description: "my blog + portfolio site",
		link: "xoboid.vercel.app",
		promoted: true,
	},
	{
		title: "guestbook",
		techs: ["nextjs", "shadcn", "typeScript", "supabase"],
		description: "an open-source guestbook for your portfolio site",
		link: "xoboid.vercel.app",
		promoted: true,
	},
	// {
	// 	title: "void.fm",
	// 	techs: ["Next.js", "Shadcn/ui", "NextAuth", "TypeScript", "Spotify"],
	// 	description: "A spotify stats app",
	// 	link: "github.com/xobd",
	// 	promoted: true,
	// 	image: "lembe.png",
	// 	isComingSoon: true,
	// },
	// {
	// 	title: "otanoid",
	// 	techs: [
	// 		"Next.js",
	// 		"Shadcn/ui",
	// 		"TypeScript",
	// 		"Supabase",
	// 		"Zustand",
	// 		"DrizzleORM",
	// 	],
	// 	description:
	// 		"an app to help you efficiently manage your manga and anime backlog",
	// 	link: "ota.sh",
	// 	promoted: true,
	// 	image: "lembe.png",
	// 	isComingSoon: true,
	// },
	// {
	// 	title: "xoboid",
	// 	techs: ["Next.js", "Shadcn/ui", "TypeScript"],
	// 	description: "My personal site + blog",
	// 	link: "xoboid.vercel.app",
	// 	promoted: false,
	// 	image: "xoboid.jpg",
	// },
	// {
	// 	title: "orb",
	// 	techs: ["WebGL", "TypeScript"],
	// 	description: "a web based graphics library",
	// 	link: "github.com/xobd",
	// 	promoted: false,
	// 	image: "lembe.png",
	// 	wip: true,
	// },
	// {
	// 	title: "wordle-lite",
	// 	techs: ["React", "SCSS", "JavaScript", "Vite"],
	// 	link: "github.com/x0bd/wordle-lite",
	// 	description: "a beautiful tiny clone of the wordle game",
	// 	promoted: false,
	// 	image: "lembe.png",
	// },
];

export default projects;
