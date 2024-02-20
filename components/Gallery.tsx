import { images } from "@/data/images";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
	return (
		<div className="px-2 my-3 grid gap-4 grid-cols-gallery auto-rows-[10px]">
			{images.map((image, index) => (
				<div
					className="relative overflow-hidden h-40 mb-4 group"
					key={index}
				>
					<ImageContainer photo={image} />
				</div>
			))}
		</div>
	);
};

export default Gallery;
