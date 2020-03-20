let salaries = {
  Chintu: 10,
  Mintu: 20,
  Golu: 50
};

let sum = 0;

for (key in salaries) {
  sum = sum + salaries[key];
}

console.log(sum);
