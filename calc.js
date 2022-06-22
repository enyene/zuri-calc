let a = parseFloat(prompt("enter a number"));
let b = parseFloat(prompt("enter the second number"));

var operation = prompt("which operation would you like to perform{+,-,*,/}");

if (operation == "+") {
  result = a + b;
} else if (operation == "-") {
  result = a - b;
} else if (operation == "*") {
  result = a * b;
} else {
  result = a / b;
}

alert(result);
