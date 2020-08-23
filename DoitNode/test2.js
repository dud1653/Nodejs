console.log('argv 속성의 파라미터 수 : ' + process.argv.length) 

console.dir(process.argv)
// 객체의 속성을 전부 출력
// node의 실행파일 위치와 현재 파일의 위치를 배열로 출력

process.argv.forEach(function(item, index) {
    console.log(index + " : " + item)
})