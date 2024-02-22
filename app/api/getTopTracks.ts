import { z } from "zod";
import { getAccessToken } from "@/lib/spotify";

export async function getTopTracks() {
	const { access_token } = await getAccessToken();

	const response = await fetch(
		"https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
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
					artists: z.array(
						z.object({
							name: z.string(),
						})
					),
					album: z.object({
						name: z.string(),
						images: z.array(
							z.object({
								url: z.string(),
							})
						),
					}),
					external_urls: z.object({
						spotify: z.string(),
					}),
					name: z.string(),
				})
			),
		})
		.parse(response);

	try {
		if (typeof items !== "object" || response === null) {
			throw new Error("Rate Limiter");
		}
		return items.slice(0, 10).map((item) => ({
			artists: item.artists,
			songUrl: item.external_urls.spotify,
			title: item.name,
			album: item.album.name,
			image: item.album.images[0].url,
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
