export function printResult(result) {
  var resultDisplay = document.getElementById("result");
  var resultPrint = `
    <h2>The largest number is: ${result}</h2>
    `;
  resultDisplay.innerHTML += resultPrint;
}