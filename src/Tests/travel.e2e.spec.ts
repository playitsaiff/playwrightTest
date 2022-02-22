import { test, expect } from "@playwright/test";
import { TravelPage } from "../Page/travel";

test.describe.parallel("travel page", () => {
  test("should be accessible through url", async ({ page }) => {
    const travelPage = new TravelPage(page);
    await travelPage.openThroughUrl();
  });
  test("should be accessible through link", async ({ page }) => {
    const travelPage = new TravelPage(page);
    await travelPage.openThroughLink();
  });
    test("breakcrum link should work", async ({ page }) => {
      const travelPage = new TravelPage(page);
      await travelPage.openThroughLink();
      await travelPage.clickAllApplicationBreadCrum();
      await page.pause();
    });
});

