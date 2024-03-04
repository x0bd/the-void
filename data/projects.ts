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
	drizzle: "simple-icons:drizzle",
	zod: "simple-icons:zod",
	radix: "simple-icons:radixui",
	node: "akar-icons:node-fill",
	express: "simple-icons:express",
	mdx: "simple-icons:mdx",
	spotify: "bi:spotify",
};

export type Experiment = {
	title: string;
	preview: string;
	techs: string[];
	github?: string;
	web?: string;
	codepen?: string;
	previewAlt: string;
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

export const experiments: Experiment[] = [
	{
		title: "Unknown Pleasures Live",
		techs: ["p5js", "javaScript"],
		preview: "/images/pleasure.jpeg",
		previewAlt: "Unknown Pleasures",
	},
	{
		title: "Three Body Problem",
		techs: ["p5.js", "javaScript"],
		preview: "/images/demon.jpg",
		previewAlt: "Three Body Problem",
	},
];

export const projects: Project[] = [
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
		techs: ["nextjs", "tailwind", "typeScript", "mdx", "vercel", "spotify"],
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
];
