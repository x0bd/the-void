import type { Photo } from "@/data/experiment";
import Image from "next/image";
import Link from "next/link";

type Props = {
	photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
	const widthHeightRatio = photo.height / photo.width;
	const galleryHeight = Math.ceil(297 * widthHeightRatio);
	const photoSpans = Math.ceil(galleryHeight / 10) + 1;

	return (
		<div
			className="w-[297px] m-0 p-0 justify-self-center"
			style={{ gridRow: `span ${photoSpans}` }}
		>
			<div className="grid place-content-center p-0 m-0 overflow-hidden group">
				<Link href={photo.link} target="_blank">
					<Image
						src={photo.src}
						alt={photo.alt}
						width={photo.width}
						height={photo.height}
						sizes="297px"
						priority
						className="rounded-md object-cover hover:cursor-pointer hover:opacity-95"
					/>
				</Link>
			</div>
		</div>
	);
}
