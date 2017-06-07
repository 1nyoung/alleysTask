/*
 서버
 루프 모듈로 데려와서 실행할 경우
 */
var express = require('express')
    , http = require('http')
    , path = require('path');

//Exoress 서버 객체 만들기
var app = express();
var fs = require('fs')
var loop = require('./loop');


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

        // ----------------------------------------------------------------

        loop(10000, function(next, id){
            setTimeout(function(){
                //process.nextTick(function () {
                console.log(id);
                next();
                //})
            },0)
        }, function(){console.log('end')} );

        //-------------------------------------------------------------------
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
        console.log(count + '응답');
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
