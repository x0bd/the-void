import { images } from "@/data/experiment";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
	return (
		<div className="p-3 m-0 px-0 bg-zinc-300 rounded-md grid grid-cols-gallery auto-rows-[10px]">
			{images.map((image, index) => (
				<ImageContainer key={index} photo={image} />
			))}
		</div>
	);
};

export default Gallery;
