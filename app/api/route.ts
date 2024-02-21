// src/app/spotify_token.ts
import { NextRequest, NextResponse } from "next/server";
import https from "https";

export async function POST(req: NextRequest) {
	const client_id = "19052841c02f4b2a990ee3d6636cd922";
	const client_secret = "708f60d487ac4b5295b68f4849ad1e5d";

	const authOptions = {
		hostname: "accounts.spotify.com",
		path: "/api/token",
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(client_id + ":" + client_secret).toString("base64"),
		},
	};

	return new Promise((resolve, reject) => {
		const request = https.request(authOptions, (response) => {
			let data = "";

			response.on("data", (chunk) => {
				data += chunk;
			});

			response.on("end", () => {
				const parsedData = JSON.parse(data);
				resolve(NextResponse.json(parsedData));
			});
		});

		request.on("error", (error) => {
			console.error(error);
			reject(NextResponse.json({ error: "Error" }, { status: 500 }));
		});

		request.write("grant_type=client_credentials");
		request.end();
	});
}
