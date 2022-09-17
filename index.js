"use strict";
exports.__esModule = true;
// Import List data structure
var list_js_1 = require("./list.js");
// Reading from file
var fs = require('fs');
var State = fs.readFileSync("./students_test.txt", "utf-8");
function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}
var comma = ',';
var newLine = '\n';
var studentList = new list_js_1.List();
studentList.dataStore = splitString(State, newLine);
var studentDataArray;
studentList.dataStore.forEach(function (element) {
    studentDataArray = splitString(element.toString(), comma);
    element = {
        Name: studentDataArray[0],
        Surname: studentDataArray[1],
        Grade: parseInt(studentDataArray[2], 10),
        Classroom: parseInt(studentDataArray[3], 10),
        Bus: parseInt(studentDataArray[4], 10),
        TName: studentDataArray[5],
        TSurname: studentDataArray[6]
    };
    console.log(element);
});
studentList.front();
