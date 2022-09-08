import AxeBuilder from "@axe-core/webdriverjs";
import WebDriver from "selenium-webdriver";
import { By } from "selenium-webdriver";

var driver = new WebDriver.Builder().forBrowser("chrome").build();

export default class MyClass {
  setup() {
    driver.get("https://dequeuniversity.com/demo/mars/").then(() => {
      new AxeBuilder(driver).analyze((err, result) => {
        if (err) {
        }
        console.log(result.violations);
        console.log(result.violations.length);
        if (result.violations.length > 0) {
          console.log("violations found");
        } else {
          console.log("no violations found");
          driver.quit();
        }
      });
    });
  }
  mainnav() {
    driver.get("https://dequeuniversity.com/demo/mars/");
    var nav = driver.findElement(By.css("#main-nav"));
    if (nav != null) {
      console.log("nav is visible");
    } else {
      console.log("nav is not visible");
      driver.quit();
      //driver.close();
      //driver.quit();
    }
  }
}
