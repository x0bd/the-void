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
	rust: "simple-icons:rust",
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

export const projects: Project[] = [
	{
		title: "celeste",
		techs: ["vite", "typeScript"],
		description: "an mvc client-side web framework",
		link: "github.com/x0bd/celeste",
		promoted: true,
		wip: true,
	},
	{
		title: "guestbook",
		techs: ["nextjs", "shadcn", "typeScript", "supabase"],
		description: "an open-source guestbook for your portfolio site",
		link: "xoboid.vercel.app",
		promoted: true,
	},
	{
		title: "the void",
		techs: ["nextjs", "tailwind", "spotify", "typeScript", "vercel"],
		description: "my portfolio site + blog",
		link: "xoboid.vercel.app",
		promoted: true,
	},
	{
		title: "rascii",
		techs: ["rust"],
		description: "a cli tool to quickly generate ascii art from images",
		link: "/",
		promoted: true,
	},
];
