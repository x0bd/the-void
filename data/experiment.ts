export type Photo = {
	src: string;
	alt: string;
	width: number;
	height: number;
	link: string;
};

export const images: Photo[] = [
	{
		src: "/images/joy.png",
		alt: "unknown pleasures",
		width: 700,
		height: 700,
		link: "/",
	},
	{
		src: "/images/waves.gif",
		alt: "hard waves",
		width: 700,
		height: 700,
		link: "/",
	},
	{
		src: "/images/morty.png",
		alt: "Morty Smith",
		width: 1040,
		height: 1005,
		link: "/",
	},
];
