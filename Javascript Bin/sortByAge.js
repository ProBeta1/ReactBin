let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

function sortByAge(arr) {
  let myarr = arr.map(item => item["name"]);
  myarr.sort();
  console.log(myarr);
  let i = 0;
  for (key in arr.name) {
    key["name"] = myarr[i++];
    console.log(key["name"]);
  }
  console.log(arr[0].name);
}

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
