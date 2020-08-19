/*
    Non-Blocking Code
    Callback 함수가 사용된 Non-Blocking Code 예제
 */

 var fs = require("fs")

 fs.readFile("input.txt", function(err, data) {
     if(err) return 
    console.log(data.toString())
 })

 console.log("Program has ended")

 // 프로그램이 함수가 끝날때 까지 기다리지 않고 바로 그 아래에 있는 코드를 실행
 // 그 다음에 함수에 있떤 작업이 다 끝나면 콜백함수를 호출

 // 모든 Node 어플리케이션의 비동기식 함수에서는 첫번째 매개변수로는 error를
 // 마지막 매개변수로는 callback함수를 받는다.

 // readFile() 보다 작업시간이 오래걸리는 코드였다면 함수를 먼저 실행