import { Metadata } from "next";
import { images } from "@/data/images";
import Image from "next/image";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "xoboid - art",
	description: "",
};

const Art = () => {
	return (
		<main>
			<h1>Art, doodles, generative</h1>
			<Gallery />
		</main>
	);
};

export default Art;
