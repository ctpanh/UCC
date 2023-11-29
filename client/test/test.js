const { suite } = require("selenium-webdriver/testing");
const { By, Builder, until, Select, Browser } = require("selenium-webdriver");
const assert = require("assert");

suite(
  function (env) {
    describe("Login", function () {
      let driver;

      before(async function () {
        driver = await env.builder().build();
      });

      after(() => driver.quit());

      // T1
      it("T1", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/login");
        await driver.findElement(By.id("username")).sendKeys("abc");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });

      // T2
      it("T2", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/login");
        await driver.findElement(By.id("username")).sendKeys("      ");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });

      // T3
      it("T3", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/login");
        await driver.findElement(By.id("username")).sendKeys("      ");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/login");
      });

      // T4
      it("T4", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/login");
        await driver.findElement(By.id("username")).sendKeys("dsasdsd");
        await driver.findElement(By.id("password")).sendKeys("");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });
    });
    describe("Signup", function () {
      let driver;

      before(async function () {
        driver = await env.builder().build();
      });

      after(() => driver.quit());

      // T1
      it("T1", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/register");
        await driver.findElement(By.id("username")).sendKeys("abc");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });

      // T2
      it("T2", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/register");
        await driver.findElement(By.id("username")).sendKeys("      ");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });

      // T3
      it("T3", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/register");
        await driver.findElement(By.id("username")).sendKeys("      ");
        await driver.findElement(By.id("password")).sendKeys("12345678");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/register");
      });

      // T4
      it("T4", async function () {
        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.get("http://localhost:5173/register");
        await driver.findElement(By.id("username")).sendKeys("dsasdsd");
        await driver.findElement(By.id("password")).sendKeys("");
        await driver
          .findElement(By.className("btn btn-primary btn-block confirm-button"))
          .click();
        await driver.wait(until.urlIs("http://localhost:5173/notes"), 5000);

        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "http://localhost:5173/notes");
      });
    });
  },
  { browsers: Browser.CHROME }
);
