import { getAccessToken } from "@/lib/spotify";
import { z } from "zod";

async function getFollowersOfArtistFromId(id: string) {
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
		return "not available";
	} else {
		const { followers } = result.data;

		return followers.total;
	}
}

export async function GET() {
	const { access_token } = await getAccessToken();

	const response = await fetch(
		"https://api.spotify.com/v1/me/top/artists?time_range=short_term",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	).then((res) => res.json());

	const schema = z.object({
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
	});

	const result = schema.safeParse(response);

	if (!result.success) {
		console.log(result.error.issues);
	} else {
		const items = result.data.items;
		const data = items.slice(0, 15).map((item) => ({
			name: item.name,
			url: item.external_urls.spotify,
			image: item.images[0].url,
			followers: getFollowersOfArtistFromId(
				item.external_urls.spotify.split("/")[
					item.external_urls.spotify.split("/").length - 1
				]
			).then((res) => res.toLocaleString()),
		}));
		return Response.json(data);
	}
}
