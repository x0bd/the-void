import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "xoboid • experiments",
	description: "3D Explorations | Generative Sketches | Graphics Experiments",
};

const Art = () => {
	return (
		<main className="flex flex-col gap-10">
			<h1 className="text-xl font-medium">
				Fun Little Generative Sketches
			</h1>
			<Gallery />
		</main>
	);
};

export default Art;
