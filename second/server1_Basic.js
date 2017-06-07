/*
 서버
 요청을 받는 아주 간단한 서버
 */
var express = require('express')
    , http = require('http')
    , path = require('path');

//Exoress 서버 객체 만들기
var app = express();


//서버 변수 설정
app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>welcome<h1>')
    res.end();
});

app.get('/hi', function(req, res){
    console.log('client connect');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
});



//서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});