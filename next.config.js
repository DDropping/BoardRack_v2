/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Replaces the old babel-plugin-styled-components (.babelrc is gone, so the
  // build now uses SWC).
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: process.env.NODE_ENV !== "production",
    },
  },

  // Next 16 writes AGENTS.md/CLAUDE.md into the repo root on every run.
  // Opt out; re-enable if you want those checked in.
  agentRules: false,
};

module.exports = nextConfig;
