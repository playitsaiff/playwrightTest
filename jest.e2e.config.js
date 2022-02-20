module.exports = {
  preset: "jest-playwright-preset",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: ["<rootDir>/src/**/*.+(e2e.spec|e2e.test).[jt]s?(x)"],
};
