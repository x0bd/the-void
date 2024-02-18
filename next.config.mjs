/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/x0bd/blogposts/master/images/**",
			},
		],
	},
};

export default nextConfig;
