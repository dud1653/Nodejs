/*
    Blocking Code
    콜백함수가 사용되지 않는 Blocking Code 예제
*/

var fs = require("fs")
var data = fs.readFileSync("input.txt")

console.log(data.toString())
console.log("Program has ended")

// 텍스트를 출력하고나서 프로그램이 종료되었다는 문구 출력