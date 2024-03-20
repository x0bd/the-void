import type { Experiment } from "@/data/experiment";
import Image from "next/image";
import Link from "next/link";

type Props = {
	experiment: Experiment;
};

const Experiment = ({ experiment }: Props) => {
	return (
		<Link href={experiment.link}>
			<Image
				className="rounded-lg"
				src={experiment.src}
				alt={experiment.alt}
				width={experiment.width}
				height={experiment.height}
			/>
		</Link>
	);
};

export default Experiment;
