import { topTracks } from "@/lib/spotify";

// In order to fix HTTP method / async,  changed from "export default async function handler(req, res)" to "export async function GET() "

export async function GET() {
	const response = await topTracks();
	const { items } = await response.json();

	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		coverImage: track.album.images[1],
		title: track.name,
	}));

	return new Response(JSON.stringify({ tracks }), {
		status: 200,
		headers: {
			"content-type": "application/json",
			"cache-control":
				"public, s-maxage=86400, stale-while-revalidate=43200",
		},
	});
}
