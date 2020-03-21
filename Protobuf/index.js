const fs = require("fs");

const students = [];
const abhinav = { name: "abhinav", course: "protobf", id: 11 };
const probeta = { name: "probeta", course: "thrift", id: 12 };
const kumar = { name: "abhinav", course: "json^2", id: 13 };

students.push(abhinav);
students.push(probeta);
students.push(kumar);

fs.writeFileSync("jsondata.json", JSON.stringify(students));
