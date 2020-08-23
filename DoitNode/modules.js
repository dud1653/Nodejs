var nconf = require('nconf')
// 만들어져있는 모듍은 경로 안쓰고 사용하면 됨
// 모듈을 설치해야 사용 가능
// npm install nconf

var value = nconf.get('OS')


console.log('OS 환경변수의 값 : ' + value)


// npm init을 사용해 외장모듈 설치
