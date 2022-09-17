// Import List data structure
import { List } from "./list.js"
// Reading from file
const fs = require('fs') 
const State = fs.readFileSync("./students_test.txt", "utf-8")

type Student = {
    Name: string
    Surname: string
    Grade: number
    Classroom: number
    Bus: number
    TName: string
    TSurname: string
}

function splitString(stringToSplit: string, separator: string) {
    const arrayOfStrings: string[] = stringToSplit.split(separator)
    return arrayOfStrings
}
const comma = ','
const newLine = '\n'


const studentList = new List()
studentList.dataStore = splitString(State, newLine)
let studentDataArray: string[]

studentList.dataStore.forEach((element: Student) => {
    studentDataArray = splitString(element.toString(), comma)
    element = {
        Name: studentDataArray[0],
        Surname: studentDataArray[1],
        Grade: parseInt(studentDataArray[2], 10),
        Classroom: parseInt(studentDataArray[3], 10),
        Bus: parseInt(studentDataArray[4], 10),
        TName: studentDataArray[5],
        TSurname: studentDataArray[6]
    }
    console.log(element)
})
studentList.front()




