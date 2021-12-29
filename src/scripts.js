var firstNumber = prompt("Enter your first number");
var secondNumber = prompt("Enter your second number");
var thirdNumber = prompt("Enter your third number");

var largest = Math.max(firstNumber, secondNumber, thirdNumber);

var resultDisplay = document.getElementById("result");

var resultPrint = `
<p>The largest number is: ${largest}</p>
`;

resultDisplay.innerHTML += resultPrint;
