//필요한 모듈 불러들이기 
//불러들인 파일은 자바스크립트 객체로 인식되며, 그 객체를 참조하여 파일에 넣어둔 기능을 사용가능
var express = require('express')
  , http = require('http')
  , path = require('path');


var expressErrorHandler = require('express-error-handler');


//Exoress 서버 객체 만들기
var app = express();


//서버 변수 설정
app.set('port', process.env.PORT || 3000);


//static으로 public 폴더 설정
app.use(express.static(path.join(__dirname, 'public')));


// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});


//두줄의 차이를...
app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
