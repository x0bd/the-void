import type { Photo } from "@/data/images";
import Image from "next/image";

type Props = {
	photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
	return (
		<Image
			src={photo.src}
			alt={photo.alt}
			fill={true}
			priority
			sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
			className="rounded-lg object-cover hover:opacity-75"
		/>
	);
}
