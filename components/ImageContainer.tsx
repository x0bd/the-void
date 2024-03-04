import type { Photo } from "@/data/experiment";
import Image from "next/image";
import Link from "next/link";

type Props = {
	photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
	const widthHeightRatio = photo.height / photo.width;
	const galleryHeight = Math.ceil(300 * widthHeightRatio);
	const photoSpans = Math.ceil(galleryHeight / 10) + 1;

	return (
		<div
			className="w-[300px] justify-self-center"
			style={{ gridRow: `span ${photoSpans}` }}
		>
			<div className="grid place-content-center overflow-hidden group">
				<Link href={photo.link} target="_blank">
					<Image
						src={photo.src}
						alt={photo.alt}
						width={photo.width}
						height={photo.height}
						sizes="300px"
						priority
						className="rounded-lg object-cover hover:cursor-pointer hover:opacity-75"
					/>
				</Link>
			</div>
		</div>
	);
}
