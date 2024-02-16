import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
	const posts = await getPostsMeta();

	// Custom 404
	if (!posts) {
		return (
			<p className="mt-10 text-center">
				Sorry, the void ⭕ swallowed the posts.
			</p>
		);
	}

	return (
		<section className="max-w-2xl">
			<ul className="flex justify-between flex-col gap-4">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
