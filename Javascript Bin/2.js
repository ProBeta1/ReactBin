function isEmpty(obj) {
  let flag = false;

  for (key in obj) {
    flag = true;
  }

  return !flag;
}

let bug = {};
console.log(isEmpty(bug));

bug["mota bug"] = "aa gya hai";

console.log(isEmpty(bug));
