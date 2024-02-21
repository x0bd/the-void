/* Spotify Track  */
export type SpotifyTrack = {
	id: number;
	title: string;
	url: string;
	coverImage: {
		url: string;
	};
	artist: string;
};

/* Spotify Artist  */
export type SpotifyArtist = {
	id: number;
	name: string;
	url: string;
	coverImage: {
		url: string;
	};
	popularity: number;
};

export type Song = {
	album: string;
	artist: string;
	albumImageUrl: string;
	isPlaying: boolean;
	songUrl: string;
	title: string;
};

export type SpotifyAccessToken = {
	access_token: string;
};
