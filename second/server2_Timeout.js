/*
 2번에서 만든 서버에서 응답을 줄 때 매 n번째 요청마다 응답 전에 매우 큰 숫자까지 for 루프를 돌고 응답을 주도록 수정해 보세요
 */
var express = require('express')
    , http = require('http')
    , path = require('path');

//Exoress 서버 객체 만들기
var app = express();


//서버 변수 설정
app.set('port', process.env.PORT || 3000);

var count = 0;
var stop = 0;

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>welcome<h1>')
    res.end();
});

app.get('/hi', function(req, res){
    console.log('client connect');
    count +=1;
    var arr = [];

    if(count%5 == 0){
        console.log(count + '요청');
        setTimeout(function(){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end();
            console.log(count + '응답');
        },5000);

    }else{
        console.log(count + '요청');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
        console.log(count + '응답');

    }
});



//서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
