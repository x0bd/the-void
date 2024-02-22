import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/tokyo-night-dark.css";

type Props = {
	params: {
		postId: string;
	};
};

export async function generateStaticParams() {
	const posts = await getPostsMeta();

	if (!posts) return [];

	return posts.map((post) => ({
		postId: post.id,
	}));
}

export async function generateMetadata({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.meta.title,
	};
}

export default async function Post({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`);

	if (!post) notFound();

	const { meta, content } = post;

	const pubDate = getFormattedDate(meta.date);

	const tags = meta.tags.map((tag, i) => (
		<Link key={i} href={`/tags/${tag}`}>
			{tag}
		</Link>
	));

	return (
		<>
			<h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>

			<article className="mt-10 mb-10">{content}</article>
			{/* <section>
				<h3>Related:</h3>
				<div className="flex flex-row gap-4">{tags}</div>
			</section> */}
		</>
	);
}
