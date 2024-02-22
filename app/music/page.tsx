import { getTopTracks } from "../api/getTopTracks";
import { getTopArtists } from "../api/getTopArtists";
import Image from "next/image";
import Link from "next/link";

const tracks = await getTopTracks();
const artists = await getTopArtists();

const MusicPage = () => {
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
						<Image
							src={image}
							alt={title}
							width={100}
							height={100}
							className="rounded-md w-20 h-20"
						/>
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
						<Image
							src={image}
							alt={name}
							height={100}
							width={100}
							className="w-20 h-20 rounded-md"
						/>
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
