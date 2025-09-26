/** @type {import('next').NextConfig} */

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "icra_rm_workshop_website";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "dist",
    // basePath: isProd ? `/${repo}` : "",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    typedRoutes: true,
};

export default nextConfig;