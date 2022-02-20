import React from "react";
import { test, expect, BrowserContext } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import { TravelPage } from "../Page/travel";
let browser: Browser;
let page: Page;
let context: BrowserContext;
test.beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ storageState: "storageState.json" });
});
test.afterAll(async () => {
  // await context.close();
  await context.close();
});
test.beforeEach(async () => {
  page = await context.newPage();
});
test.afterEach(async () => {
  await page.close();
});
test.describe("describe test", () => {
  test("should work", async () => {
    await page.goto("https://recruitppe.microsoft.com/");
    await page.waitForTimeout(10000);
    await page.waitForSelector("#appaction");
    await expect(page.locator("h1")).toHaveText("Action Center");
  });
  test("should work too", async () => {
    await page.goto("https://recruitppe.microsoft.com");
    await page.waitForSelector("#appaction");
    await expect(page.locator("h1")).toHaveText("Action Center");
    await expect(page.locator("text=Hi, Akas!").first()).toBeVisible();
  });
  test("travel", async () => {
    const travelPage = new TravelPage(page);
    await travelPage.open();
    await page.pause();
  });
});
