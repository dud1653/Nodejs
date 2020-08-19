/*
    Blocking Code
    콜백함수가 사용되지 않는 Blocking Code 예제
*/

var fs = require("fs")
var data = fs.readFileSync("input.txt")

console.log(data.toString())
console.log("Program has ended")