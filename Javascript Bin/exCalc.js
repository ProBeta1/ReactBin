// the conventional code
function calculator(str) {
  let arr = str.split(" ");

  let num1 = +arr[0];
  let op = arr[1];
  let num2 = +arr[2];

  if (op === "+") return num1 + num2;
  else return num1 - num2;
}

//the js way ; "they call this cool"

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let arr = str.split(" "),
      num1 = +arr[0],
      op = arr[1],
      num2 = +arr[2];

    if (!this.methods[op] || isNaN(num1) || isNaN(num2)) {
      return NaN;
    }
    return this.methods[op](num1, num2);
  };
  this.addMethod = function(name, fn) {
    this.methods[name] = fn;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);
