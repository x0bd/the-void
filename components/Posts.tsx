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
		<section className="mt-6 mx-auto max-w-2xl">
			<h2 className="text-xl">
				Notes, Thoughts and Doodles on computer stuff
			</h2>
			<ul className="w-full list-none p-0">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
