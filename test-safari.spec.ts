import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:1234");
  page.on("console", async (msg) => {
    const values: any[] = [];
    for (const arg of msg.args()) values.push(await arg.jsonValue());
    console.log(...values);
  });
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  page.on("pageerror", (exception) => {
    console.log(`Uncaught exception: "${exception}"`);
  });
});

test.afterEach(async () => {
  await new Promise((res) => setTimeout(res, 1000));
});

test("storage", async ({ page }) => {
  const button = page.locator("button >> text=storage");

  await button.click();
});

test("control test", async ({ page }) => {
  const button = page.locator("button >> text=test");

  await button.click();
});
