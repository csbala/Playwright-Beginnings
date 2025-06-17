export class ExamplePage {
  constructor(page) {
    this.page = page;
    this.moreInfoLink = page.locator("text=More Information...");
  }

  async goto() {
    await this.page.goto("https://example.com");
  }

  async clickMoreInfo() {
    await this.moreInfoLink.click();
  }
}
