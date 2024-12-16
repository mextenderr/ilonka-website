import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "maps.googleapis.com",
                port: "",
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    /* config options here */
};

export default nextConfig;
