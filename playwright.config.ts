import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./global-setup"),
  retries: 1,
  use: {
    headless: false,
    // Tell all tests to load signed-in state from 'storageState.json'.
    storageState: "storageState.json",
    trace: "on-first-retry",
  },
};
export default config;
