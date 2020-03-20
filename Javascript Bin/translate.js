function camilize(str) {
  let myar = str.split("-");
  let ans = myar[0];

  for (let i = 1; i < myar.length; i++) {
    let tmpString = myar[i].toString();
    tmpString = tmpString.charAt(0).toUpperCase() + tmpString.slice(1);
    ans = ans.concat(tmpString);
  }

  return ans;
}

console.log(camilize("black-color-is-blue"));
