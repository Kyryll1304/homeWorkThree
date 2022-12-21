var x = parseFloat(prompt("Число А", ""));
var y = parseFloat(prompt("Число В", ""));
var op = prompt("Виберіть дію", "");

if (op == "add") {
  z = Number(x) + Number(y);
} else if (op == "div") {
  z = Number(x) / Number(y);
} else if (op == "mul") {
  z = Number(x) * Number(y);
} else if (op == "sub") {
  z = Number(x) - Number(y);
}
alert(z);
