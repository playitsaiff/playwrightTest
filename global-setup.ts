import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://recruitppe.microsoft.com");
  await page.click("#MicrosoftAccountExchange");
  await page.click('input[name="loginfmt"]');
  await page.fill('input[name="loginfmt"]', "akashverma.tt@outlook.com");
  await page.press('input[name="loginfmt"]', "Enter");
  await page.click('input[name="passwd"]');
  await page.fill('input[name="passwd"]', "Career@123");
  await page.press('input[name="passwd"]', "Enter");
  await page.click("#idSIButton9");
  // Save signed-in state to 'storageState.json'.
  // This will be used later
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
