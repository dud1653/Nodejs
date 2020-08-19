/*
    Callback Function
    자바스크립트에서는, 함수(function)는 일급 객체
    즉, 함수는 Object타입이며 다른 일급 객체와 똑같이 사용 (String, Array, Number 등)

    Callback Function은 특정 함수에 매개변수로서 전달된 함수를 지칭
    그리고 그 Callback Function은 그 함수를 전달받은 함수 안에서 호출
*/

$("#btn").click(function() { // 매개변수가 함수이다
    alert("Btn 클릭")
})
