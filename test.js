import MyClass from "./index.js";
let myclas = new MyClass();

it(" main navigation is visible ", function () {
  myclas.mainnav();
});

it("Page scan", function () {
  myclas.setup();
  console.log("test");
});
