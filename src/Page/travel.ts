import type { Page } from "playwright";
export class TravelPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async open() {
    await this.page.goto(
      "https://recruitppe.microsoft.com/actioncenter/travel"
    );
    
  }
}
