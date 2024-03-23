export type Experiment = {
	src: string;
	alt: string;
	width: number;
	height: number;
	link: string;
};

export const images: Experiment[] = [
	{
		src: "/images/3body.gif",
		alt: "3 body problem simulator",
		width: 800,
		height: 800,
		link: "/",
	},
	{
		src: "/images/joy.png",
		alt: "unknown pleasures",
		width: 700,
		height: 700,
		link: "/",
	},
	{
		src: "/images/morty.png",
		alt: "Ascii image of Morty Smith",
		width: 1040,
		height: 1005,
		link: "https://github.com/x0bd/rascii",
	},
	{
		src: "/images/waves.png",
		alt: "hard waves",
		width: 700,
		height: 700,
		link: "/",
	},
];
