import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'gempad.app',
      'dexscreener.com',
      'www.dextools.io',
      'basescan.org',
      'coinmarketcap.com',
      'www.coingecko.com',
      'wptinvestingcorp.io',
      't.me',
      'x.com',
    ],
  },
  socialLinks: {
    email: "info@mctrump.meme",
    telegram: "https://t.me/OfficialMcTrump",
    twitter: "https://x.com/OfficialMcTrump",
  },
  /* other config options here if needed */
};

export default nextConfig;
