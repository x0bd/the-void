"use client";

import { getTopTracks, getTopArtists } from "@/lib/spotify";
import Link from "next/link";
import { useEffect, useState } from "react";

// Assuming the functions getTopTracks and getTopArtists are async and return promises
const MusicPage = () => {
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		const fetchTracksAndArtists = async () => {
			const tracksData = await getTopTracks();
			const artistsData = await getTopArtists();
			setTracks(tracksData);
			setArtists(artistsData);
		};

		fetchTracksAndArtists();
	}, []);

	return (
		<div>
			<h1 className="text-neutral-100 text-2xl font-semibold my-8">
				Top Tracks
			</h1>

			<div className="flex flex-col gap-y-4">
				{tracks.map(({ artists, album, songUrl, title, image }) => (
					<div
						key={album}
						className="flex flex-row items-center space-x-4"
					>
						<img src={image} alt={title} className="w-16 h-16" />
						<div className="flex flex-col">
							<Link href={songUrl}>
								<h3 className="font-semibold text-neutral-100">
									{title}
								</h3>
							</Link>
							<p>{artists.map(({ name }) => name).join(", ")}</p>
							<p>{album}</p>
						</div>
					</div>
				))}
			</div>

			<h1 className="text-neutral-100 text-2xl font-semibold my-8">
				Top Artists
			</h1>

			<div className="flex flex-col gap-y-4">
				{artists.map(({ name, url, image, followers }) => (
					<div
						key={name}
						className="flex flex-row items-center space-x-4"
					>
						<img src={image} alt={name} className="w-16 h-16" />
						<div className="flex flex-col">
							<Link href={url}>
								<h3 className="font-semibold text-neutral-100">
									{name}
								</h3>
							</Link>
							<p>{followers} followers</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MusicPage;
