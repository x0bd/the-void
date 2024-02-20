import { Metadata } from "next";
import { images } from "@/data/images";
import Image from "next/image";

export const metadata: Metadata = {
	title: "xoboid - art",
	description: "",
};

const Art = () => {
	return (
		<main>
			<h1>Art, doodles, generative</h1>
			<div className="px-2 my-3 grid gap-2 grid-cols-gallery">
				{images.map((image, index) => (
					<div key={index}>
						<Image
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							className="rounded-lg"
						/>
					</div>
				))}
			</div>
		</main>
	);
};

export default Art;
