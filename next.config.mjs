/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
