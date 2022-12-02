module.exports = {
  collectCoverageFrom: [
    'src/**/__tests__/*.{ts,tsx}'
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testRegex: '\\.test\\.(ts|tsx)$',
};
