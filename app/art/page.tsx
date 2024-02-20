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
			<div className="px-2 my-3 grid gap-4 grid-cols-gallery auto-rows-[10px]">
				{images.map((image, index) => (
					<div
						className="relative overflow-hidden h-40 mb-4 group"
						key={index}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill={true}
							priority
							sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
							className="rounded-lg object-cover hover:opacity-75"
						/>
					</div>
				))}
			</div>
		</main>
	);
};

export default Art;
