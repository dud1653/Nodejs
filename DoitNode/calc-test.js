var calc2 = require('./calc2') // 직접 만든 모듈은 상대경로라서 ./를 붙여줘야함

// exports를 사용
console.log('모듈로 분리한 후 - calc.add : ' + calc2.add(10,10))

