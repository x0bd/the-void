export type Photo = {
	src: string;
	alt: string;
	width: number;
	height: number;
	link: string;
};

export const images: Photo[] = [
	{
		src: "/images/joy-division.png",
		alt: "unknown pleasures",
		width: 700,
		height: 700,
		link: "/",
	},
];
