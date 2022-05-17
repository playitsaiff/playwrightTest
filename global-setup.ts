import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ channel: "chrome", headless: false });
  const page = await browser.newPage();
  await page.goto("https://opsreportingdev.azureedge.net/");
  await page.click('input[name="loginfmt"]');
  await page.fill('input[name="loginfmt"]', "orppbi@microsoft.com");
  await page.press('input[name="loginfmt"]', "Enter");
  await page.click('input[name="passwd"]');
  await page.fill('input[name="passwd"]', "RaisingFalcons@649");
  await page.press('input[name="passwd"]', "Enter");
  await page.click("#idSIButton9");
  await page.waitForSelector("#appaction");
  // Save signed-in state to 'storageState.json'.
  // This will be used later
  //   await page.context().storageState({ path: "storageState.json" });
  //   await browser.close();
}
export default globalSetup;
