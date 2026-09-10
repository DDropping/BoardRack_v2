// Next 16 removed `next lint`; ESLint runs directly against a flat config.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  { ignores: [".next/**", "node_modules/**", "coverage/**"] },
  ...nextCoreWebVitals,
];
