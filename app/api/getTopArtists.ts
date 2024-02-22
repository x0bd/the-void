import { z } from "zod";
import { getAccessToken } from "@/lib/spotify";

export async function getFollowersOfArtistFromId(id: string) {
	const { access_token } = await getAccessToken();

	const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	}).then((res) => res.json());

	const schema = z.object({
		followers: z.object({
			total: z.number(),
		}),
	});

	const result = schema.safeParse(response);

	if (!result.success) {
		console.error(result.error.issues);
		return 0;
	} else {
		const { followers } = result.data;

		return followers.total;
	}
}

export async function getTopArtists() {
	const { access_token } = await getAccessToken();

	const response = await fetch(
		"https://api.spotify.com/v1/me/top/artists?time_range=short_term",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	).then((res) => res.json());

	const { items } = z
		.object({
			items: z.array(
				z.object({
					name: z.string(),
					images: z.array(
						z.object({
							url: z.string(),
						})
					),
					external_urls: z.object({
						spotify: z.string(),
					}),
					followers: z.object({
						total: z.number(),
					}),
				})
			),
		})
		.parse(response);

	try {
		if (typeof items !== "object" || response === null) {
			throw new Error("Rate Limiter");
		}
		return items.slice(0, 10).map((item) => ({
			name: item.name,
			url: item.external_urls.spotify,
			image: item.images[0].url,
			followers: getFollowersOfArtistFromId(
				item.external_urls.spotify.split("/")[
					item.external_urls.spotify.split("/").length - 1
				]
			).then((res) => res.toLocaleString()),
		}));
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error("Validation error:", error.issues);
		} else if (error instanceof SyntaxError) {
			console.error("Parsing error:", error.message);
		} else {
			console.error("Unexpected error:", error);
		}
	}
}
