const Schema = require("./students_pb");
const fs = require("fs");
const abhinav = new Schema.Student();
abhinav.setId(11);
abhinav.setName("Abhinav");
abhinav.setCourse("protobuf");

const probeta = new Schema.Student();
probeta.setId(12);
probeta.setName("probeta");
probeta.setCourse("thrift");

const kumar = new Schema.Student();
kumar.setId(13);
kumar.setName("kumar");
kumar.setCourse("json^2");

const students = new Schema.Students();
students.addStudents(abhinav);
students.addStudents(probeta);
students.addStudents(kumar);

const toBytes = students.serializeBinary();
console.log("Binary info : " + toBytes);

fs.writeFileSync("studentsbin", toBytes);

const newStudents = Schema.Students.deserializeBinary(toBytes);
console.log(newStudents.toString());
