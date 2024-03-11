import { images } from "@/data/experiment";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
	return (
		<div className="p-5 px-0 my-3 grid grid-cols-gallery auto-rows-[11px]">
			{images.map((image, index) => (
				<ImageContainer key={index} photo={image} />
			))}
		</div>
	);
};

export default Gallery;
