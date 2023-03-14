/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_API: process.env.NEXT_API,
		GOOGLE_ID: process.env.GOOGLE_ID,
	},
};

module.exports = nextConfig;
