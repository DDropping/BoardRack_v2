// Resolved in priority order:
//   1. NEXT_PUBLIC_SITE_URL   - set this to the production domain once one is
//                               attached (canonical, stable across deploys).
//   2. NEXT_PUBLIC_VERCEL_URL - injected automatically by Vercel; unique per
//                               deployment, so preview builds call themselves
//                               rather than production.
//   3. localhost              - development.
//
// The previous version hardcoded https://boardrack.dev, which meant every
// server-side fetch from a preview deployment or a new domain hit the old site.
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : null);

const baseUrl =
  fromEnv || `http://localhost:${process.env.PORT || 3000}`;

export default baseUrl;
