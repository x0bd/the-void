import { Metadata } from "next";
import { images } from "@/data/images";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "xoboid - art",
	description: "",
};

const Art = () => {
	return (
		<main>
			<h1>These Are Placeholder Images.</h1>
			<Gallery />
		</main>
	);
};

export default Art;
