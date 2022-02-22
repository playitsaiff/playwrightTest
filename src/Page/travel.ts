import type { Page } from "playwright";
import { expect } from "@playwright/test";
export class TravelPage {
  readonly page: Page;
  readonly finalUrl = `https://recruitppe.microsoft.com/actioncenter?login_hint=${process.env.REACT_APP_USEREMAIL}&domain=microsoft.com&country=India&type=external&redirectsource=microsoft&lang=en_us`;
  constructor(page: Page) {
    this.page = page;
  }
  async openThroughUrl() {
    //for auto login
    await this.page.goto("https://recruitppe.microsoft.com");
    await this.page.waitForSelector("#appaction");

    //for feature flag
    await this.page.goto(this.finalUrl);
    await this.page.waitForSelector(
      '[aria-label="Submit\\ travel\\ preferences\\ for\\ your\\ interviews"]'
    );

    await this.page.goto(
      "https://recruitppe.microsoft.com/actioncenter/travel"
    );
    await expect(this.page.locator(".ms-Spinner-label ")).toHaveText(
      "Loading the travel request form..."
    );
    await expect(this.page.locator(".ac-ms-travelRequestNavTitle")).toHaveText(
      "Travel Request"
    );
  }
  async openThroughLink() {
    await this.page.goto("https://recruitppe.microsoft.com");
    await this.page.waitForSelector("#appaction");
    await this.page.goto(this.finalUrl);
    await this.page.waitForSelector("#appaction");
    await this.page
      .locator(
        '[aria-label="Submit\\ travel\\ preferences\\ for\\ your\\ interviews"]'
      )
      .first()
      .click();
    await expect(this.page.locator(".ac-ms-travelRequestNavTitle")).toHaveText(
      "Travel Request"
    );
  }
  async clickAllApplicationBreadCrum() {
    await this.page.locator('button:has-text("All applications")').click();
    await expect(this.page).toHaveURL(
      "https://recruitppe.microsoft.com/actioncenter/submitted"
    );
  }
}
