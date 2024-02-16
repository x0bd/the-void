import { compileMDX } from "next-mdx-remote/rsc";

type FileTree = {
	tree: [
		{
			path: string;
		}
	];
};

export async function getPostByName(
	fileName: string
): Promise<BlogPost | undefined> {
	const res = await fetch(
		`https://raw.githubusercontent.com/x0bd/blogposts/main/${fileName}`,
		{
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"X-Github-Api-Version": "2022-11-28",
			},
		}
	);

	if (!res.ok) return undefined;

	const rawMDX = await res.text();

	if (rawMDX === "404: Not Found") return undefined;

	const { frontmatter, content } = await compileMDX<{
		title: string;
		date: string;
		tags: string[];
	}>({ source: rawMDX });

	const id = fileName.replace(/\.mdx$/, "");

	const blogPostObj: BlogPost = {
		meta: {
			id,
			title: frontmatter.title,
			date: frontmatter.date,
			tags: frontmatter.tags,
		},
		content,
	};

	return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
	const res = await fetch(
		"https://api.github.com/repos/x0bd/blogposts/git/trees/main?recursive=1",
		{
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"X-Github-Api-Version": "2022-11-28",
			},
		}
	);

	if (!res.ok) return undefined;

	const repoFileTree: FileTree = await res.json();

	const filesArray = repoFileTree.tree
		.map((obj) => obj.path)
		.filter((path) => path.endsWith(".mdx"));

	const posts: Meta[] = [];

	for (const file of filesArray) {
		const post = await getPostByName(file);
		if (post) {
			const { meta } = post;
			posts.push(meta);
		}
	}

	return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
