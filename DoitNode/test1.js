console.log('Hello World!')

console.log('%d은 숫자입니다.', 10)

console.log('%s은 문자열입니다.', '안녕')

var person = {
    name: 'LEE',
    age: 20
}

console.log('%j는 Javascript객체입니다.', person)

console.dir(person) // 객체가 가지고 있는 속성을 출력


console.time('duration_time') // 키값을 이용해서 for문이 걸린시간을 출력
var result = 0
for(var i=0; i<10000; i++) {
    result += i
}
console.timeEnd('duration_time') // 키값을 그대로 적어주면 됨

console.log('파일 이름 : %s', __filename) // 사용하고 있는 파일 경로와 이름을 출력
console.log('패스 : %s', __dirname) // 사용하고 있는 파일의 경로를 출력