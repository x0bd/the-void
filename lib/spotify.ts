import { z } from "zod";

export async function getAccessToken(): Promise<{ access_token: string }> {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!refreshToken) {
		throw new Error("Refresh Token is not set");
	}

	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${clientId}:${clientSecret}`
			).toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
	});

	const { access_token } = z
		.object({
			access_token: z.string(),
		})
		.parse(await response.json());

	return { access_token };
}
