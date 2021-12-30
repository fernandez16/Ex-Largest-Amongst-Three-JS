import { getNumbers } from "./modules/getNumbers.js";
import { findLargestNumber } from "./modules/findLargestNumber.js";
import { printResult } from "./modules/printResult.js";

const appBtn = document.getElementById("start");

appBtn.addEventListener("click", function () {
  var numbersArray = getNumbers();
  var result = findLargestNumber(numbersArray);
  printResult(result);
});
