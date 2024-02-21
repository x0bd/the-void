"use client";
import Link from "next/link";
import { getTopTracks, getTopArtists } from "@/lib/spotify";
import { useEffect, useState } from "react";

const Music = () => {
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		const fetchDaat = async () => {
			const tracksData = await getTopTracks();
			const artistData = await getTopArtists();
			setTracks(tracksData);
			setArtists(artistData);
		};
	});

	return (
		<div>
			<h1 className="text-neutral-100 text-2xl font-semibold my-8">
				Top Tracks
			</h1>

			<div className="flex flex-col gap-y-4">
				{tracks.map(({ artists, album, songUrl, title, image }) => (
					<div
						className="flex flex-row items-center space-x-4"
						key={songUrl}
					>
						<img src={image} alt={title} className="w-16 h-16" />
						<div className="flex flex-col">
							<Link href={songUrl}>
								<a className="font-semibold text-neutral-100">
									{title}
								</a>
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
						className="flex flex-row items-center space-x-4"
						key={url}
					>
						<img src={image} alt={name} className="w-16 h-16" />
						<div className="flex flex-col">
							<Link href={url}>
								<a className="font-semibold text-neutral-100">
									{name}
								</a>
							</Link>
							<p>{followers} followers</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Music;
