let arr = ["hey", "how", "are", "you"];

arr.splice(-2, 0, "good", "woah", "lol");

console.log(arr);

let newar = arr.slice(2, 4);

console.log(newar);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let count = users.filter(item => item.name === "Pete");

console.log(count.length);

let finear = users.map(item => [item.id, item.name]);
console.log(finear);

let string = "waha woowo yoyouj aka djfb d";
let pointar = string.split(" ");

console.log(pointar);
