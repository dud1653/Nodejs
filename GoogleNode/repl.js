/*
    R(Read) : 유저의 값을 입력 받아 Javascript 데이터 구조로 메모리에 저장
    E(Eval) : 데이터를 처리
    P(Print) : 결과값을 출력
    L(Loop) : Read, Eval, Print를 유저가 Ctrl+C를 두번 눌러 종료할때 까지 반복
*/

/*
    1. 콘솔에 node를 실행
    % node
    >

    2. 간단한 연산자
    % node
    > 1 + 5
    6
    > 1 + (6 / 2) - 3
    1
    >

    3. 변수 사용 - var를 사용하면 명령어를 입력했을 때 변수의 값이 출력되지 않고,
                 var를 사용하지 않으면 값이 출력
    % node
    > x = 10
    10
    > var y = 5
    undefined
    > x + y
    15

    4. do-while 
    % node
    > var x = 0
    undefined
    > while(x < 3) {
    ... x++
    ... console.log("x : " + x)
    ... }
    x : 1
    x : 2
    x : 3
    undefined

    5. (_)Underscore 변수 - 밑줄 _ 변수는 최근 결과값을 지칭

    % node
    > var x = 10;
    undefined
    > var y = 5;
    undefined
    > x + y
    15
    > var sum = _
    undefined
    > console.log(sum)
    15
    undefined
*/

/*
    REPL 커맨드
    Ctrl+C – 현재 명령어를 종료합니다.
    Ctrl+C (2번)  – Node REPL 을 종료합니다.
    Ctrl+D – Node REPL을 종료합니다.
    위/아래 키 – 명령어 히스토리를 탐색하고 이전 명령어를 수정합니다.
    Tab – 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인합니다.
    .help – 모든 커맨드 목록을 확인합니다.
    .break – 멀티 라인 표현식 입력 도중 입력을 종료합니다.
    .clear – .break 와 같습니다.
    .save filename – 현재 Node REPL 세션을 파일로 저장합니다.
    .load filename – Node REPL 세션을 파일에서 불러옵니다
*/