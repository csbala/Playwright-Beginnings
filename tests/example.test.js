const { test, expect } = require("@playwright/test");
const { ExamplePage } = require("../page-objects/examplePage");

test("Basic Playwright test with page objects", async ({ page }) => {
  const examplePage = new ExamplePage(page);

  // goto: Navigálj az example.com-ra
  await examplePage.goto();
  console.log("Navigálás megtörtént...");

  // Lokátor: Ellenőrizd a "More information..." link láthatóságát
  await expect(examplePage.moreInfoLink).toBeVisible();
  console.log("Lokátor megtalálva: More information...");

  // click: Kattints a linkre
  await examplePage.clickMoreInfo();
  console.log("Kattintás megtörtént...");

  // Várj 5 másodpercet a látható hatásért
  await page.waitForTimeout(5000);
  console.log("5 másodperc várakozás vége.");
});
