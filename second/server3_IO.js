/*
 서버
 입출력 비동기로 응답을 보낼 경우 테스트
 */
var express = require('express')
    , http = require('http')
    , path = require('path');

//Exoress 서버 객체 만들기
var app = express();
var fs = require('fs')


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
        function loop(stop, callback1, callback2){

            var count=0;

            var next = function(){


                if(count < stop){
                    callback1(next, count);
                    count +=1
                }else{
                    callback2()
                }

            };

            next();
        }

        loop(100, function(next, id){
            fs.readFile('./read.rtf','utf8', function(err, data){
                console.log(data);
                next();
            });
            console.log('test')
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
