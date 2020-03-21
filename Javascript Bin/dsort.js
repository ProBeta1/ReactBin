function dsort(arr) {
  let narr = arr;
  narr.sort().reverse();
  return narr;
}
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = [5, 1, 9, 6, 2];

let narr = copySorted(arr);

console.log(arr);

console.log(narr);
