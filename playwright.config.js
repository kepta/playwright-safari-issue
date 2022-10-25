// playwright.config.ts
import { devices } from "@playwright/test";

const config = {
  reporter: [["html", {}]],
  timeout: 1300,
  webServer: [
    {
      command: "npx http-server public -p 1234",
      port: 1234,
      timeout: 120 * 1000,
    },
  ],

  projects: [
    {
      name: "safari",
      testMatch: [/-safari/],
      use: { ...devices["Desktop Safari"] },
    },
  ],
};

export default config;
