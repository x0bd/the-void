import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
	post: Meta;
};

export default function ListItem({ post }: Props) {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<li className="flex flex-col justify-between w-full">
			<Link
				className="text-lg text-neutral-200 font-medium hover:text-neutral-400"
				href={`/posts/${id}`}
			>
				{title}
			</Link>

			<p className="text-sm hover:text-gray-600 text-gray-400">
				{formattedDate}
			</p>
		</li>
	);
}
