const x = parseFloat(prompt("Число А"));
const y = parseFloat(prompt("Число В"));
const op = prompt("Виберіть оператор [ div add sub mul ] :");
const operators = ["add", "sub", "div", "mul"];

function Calculator(x, y, op) {
  switch (op) {
    case "add":
      return x + y;
      break;
    case "sub":
      return x - y;
      break;
    case "mul":
      return x * y;
      break;
    case "div":
      return x / y;
      break;
  }
}

if (isNaN(x) || isNaN(y)) {
  alert("Одне з чисел було введено в невірному форматі.");
} else if (operators.indexOf(op) !== -1) {
  alert("Результат: " + Calculator(x, y, op));
} else {
  alert("Невідповідний оператор");
}
