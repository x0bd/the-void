/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
		SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
