"use client";

import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

type Artist = {
	name: string;
	url: string;
	image: string;
	followers: Promise<string>;
};

type Track = {
	artists: Artist[];
	songUrl: string;
	title: string;
	album: string;
	image: string;
};

type Fetcher<T> = (url: string) => Promise<T>;

const fetcher: Fetcher<any> = (url) => fetch(url).then((res) => res.json());

export default function Page() {
	const { data: tracks, error: tracksError } = useSWR<Track[]>(
		"/api/tracks",
		fetcher
	);
	const { data: artists, error: artistsError } = useSWR<Artist[]>(
		"/api/artists",
		fetcher
	);

	if (tracksError || artistsError) return <div>Failed to load data</div>;
	if (!tracks || !artists) return <div>Loading...</div>;

	return (
		<div>
			<h1 className="text0-neutral-100 text-2xl font-semibold my-8">
				Top Tracks
			</h1>

			<div className="flex flex-col gap-y-4">
				{tracks &&
					tracks.map(({ artists, album, songUrl, title, image }) => (
						<div
							key={title}
							className="flex flex-row items-center space-x-4"
						>
							<Image
								src={image}
								alt={title}
								width={100}
								height={100}
								className="w-20 rounded-lg h-20"
							/>
							<div className="flex flex-col">
								<Link href={songUrl}>
									<h3 className="font-semibold text-neutral-100">
										{title}
									</h3>
									<p>
										{artists
											.map(({ name }) => name)
											.join(", ")}
									</p>
									<p>{album}</p>
								</Link>
							</div>
						</div>
					))}
			</div>

			<h1 className="text-neutral-100 text-2xl font-semibold my-8">
				Top Artists
			</h1>
			<div className="flex flex-col gap-y-4">
				{artists &&
					artists.map((artist) => (
						<div
							key={artist.name}
							className="flex flex-row items-center space-x-4"
						>
							<Image
								src={artist.image}
								alt={artist.name}
								height={100}
								width={100}
								className="w-20 rounded-lg h-20"
							/>
							<div className="flex flex-col">
								<h3 className="font-semibold text-neutral-100">
									{artist.name}
								</h3>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
