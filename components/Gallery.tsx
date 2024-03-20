import { images } from "@/data/experiment";
import Experiment from "./Experiments";

const Gallery = () => {
	return (
		<div className="flex flex-col bg-zinc-300 rounded-lg sm:p-3 sm:gap-3 gap-3 p-2">
			{images.map((image, index) => (
				<Experiment key={index} experiment={image} />
			))}
		</div>
	);
};

export default Gallery;
