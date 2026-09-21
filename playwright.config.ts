import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "tests/browser",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4322",
    trace: "retain-on-failure",
    ...devices["Desktop Chrome"],
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "node scripts/serve-dist.mjs",
        url: "http://127.0.0.1:4322/en/",
        reuseExistingServer: !process.env.CI,
      },
});
