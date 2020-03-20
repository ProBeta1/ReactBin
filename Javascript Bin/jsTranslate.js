function camelize(str) {
  return str
    .split("-")
    .map((item, id) =>
      id === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("oh-wowow,this-workss"));
