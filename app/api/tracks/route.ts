import { getAccessToken } from "@/lib/spotify";
import { z } from "zod";

export async function GET() {
	const { access_token } = await getAccessToken();

	const response = await fetch(
		"https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	).then((res) => res.json());

	const schema = z.object({
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
	});

	const result = schema.safeParse(response);

	if (!result.success) {
		console.log(result.error.issues);
	} else {
		const items = result.data.items;
		const data = items.slice(0, 20).map((item) => ({
			artists: item.artists,
			songUrl: item.external_urls.spotify,
			title: item.name,
			album: item.album.name,
			image: item.album.images[0].url,
		}));

		return Response.json(data);
	}
}
