import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./global-setup"),
  retries: 1,
  testMatch: "Tests/*.+(e2e.spec|e2e.test).[jt]s?(x)",
  workers: 2,
  use: {
    //to use    npx playwright install chrome
    channel: "msedge",
    headless: true,
    // Tell all tests to load signed-in state from 'storageState.json'.
    storageState: "storageState.json",
    screenshot: "only-on-failure",
    // trace: "on-first-retry",
  },
};
export default config;
