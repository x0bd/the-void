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
	framer_motion: "tabler:brand-framer-motion",
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
		description: "a minimal mvc client-side web framework.",
		link: "github.com/x0bd/celeste",
		promoted: true,
		wip: true,
	},
	{
		title: "rascii",
		techs: ["rust"],
		description: "a cli tool to quickly generate ascii art from images.",
		link: "github.com/x0bd/rascii",
		promoted: true,
	},
	{
		title: "xoboid",
		techs: ["nextjs", "tailwind", "spotify", "typeScript", "vercel"],
		description: "my personal site, blog and other tid bits.",
		link: "xoboid.vercel.app",
		promoted: true,
	},
	{
		title: "typedash",
		techs: ["react", "vite", "framer_motion", "tailwind", "typeScript"],
		description: "a rosé-pine themed speed typing game.",
		link: "typedashi.vercel.app",
		promoted: true,
	},
];
