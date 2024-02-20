import { images } from "@/data/images";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
	return (
		<div className="px-1 my-3 grid bg-white p-6 rounded-lg grid-cols-gallery auto-rows-[10px]">
			{images.map((image, index) => (
				<ImageContainer key={index} photo={image} />
			))}
		</div>
	);
};

export default Gallery;
