const nextJest = require("next/jest");

// next/jest wires up SWC transforms, CSS/image module mocks, next/font stubs
// and path aliases, replacing the hand-rolled babel-jest setup.
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/__tests__/testUtils.js",
  ],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@reducers/(.*)$": "<rootDir>/reducers/$1",
    "^@actions/(.*)$": "<rootDir>/actions/$1",
    "^@store$": "<rootDir>/store.js",
  },
};

module.exports = createJestConfig(config);
