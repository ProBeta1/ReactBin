function filterInPlace(str, a, b) {
  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    if (value < a || value > b) {
      str.splice(i, 1), i--;
    }
  }
}

let arr = [4, 1, 7, 6, 8];
filterInPlace(arr, 1, 4);
console.log(arr);
