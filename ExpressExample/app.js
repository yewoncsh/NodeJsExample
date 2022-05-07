// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')


// Express 객체 생성
var app = express()

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000) // app 객체에 할당된 express 객체의 set 메소드를 사용 port에 속성 지정. env는 서버 모드를 설정

// 서버 설정을 위해 미리 정해진 주요 속성 이름은 다음과 같다
// env : 서버 모드를 설정
// views : 뷰들이 들어 있는 폴더 또는 폴더 배열을 설정
// view engine : 디폴트로 사용할 뷰 엔진을 설정. 클라이언트에 응답을 보낼 때 사용하는 템플릿이 여러 종류가 있는데, 그 종류를 결정하는 것이 바로 뷰 엔진

// 아 잘 안 외워져~~~~~ 실무로 반복숙달하는 게 낫겠다.

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server Starting : ' + app.get('port'))
})