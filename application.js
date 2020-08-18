/* 필요한 모듈 import하기
HTTP 모듈을 불러오고 반환되는 HTTP 인스턴스를 http 변수에 저장 */
var http = require("http")

/* 서버 생성하기
http 인스턴스를 사용하여 http.createServer() 메소드를 실행
listen 메소드를 사용하여 포트 3000과 bind
http.createServer()의 매개변수로 request와 response */
http.createServer(function(request, response) {
    /*
        HTTP 헤더 전송
        HTTP Status : 200 : OK
        Content Type : text/plain
    */
   response.writeHead(200, {'Content-Type' : 'text/plain'})

   /*
    Response Body를 "Hellow World in NodeJS로 설정"
   */
  response.end("Hello World in NodeJS")
}).listen(3000)

console.log("Server running at http://127.0.0.1:3000")