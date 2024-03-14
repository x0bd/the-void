import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "xoboid • experiments",
	description: "art made by on a computer.",
};

const Art = () => {
	return (
		<main className="flex flex-col gap-10">
			<h1 className="text-xl font-medium">
				Fun Little Experiments and Doodles
			</h1>
			<Gallery />
		</main>
	);
};

export default Art;
