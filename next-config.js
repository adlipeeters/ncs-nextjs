
// module.exports = {
//     i18n,
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "assets.aceternity.com",
//                 // port: "1337",
//                 pathname: "/**",
//             },
//         ],
//     },
// }
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['assets.aceternity.com'],
    },
};

module.exports = nextConfig;