/*
 클라이언트
 로그 찍어보기 -> 컨텍스트가 요청을 보낼때마다 생성되기 때문에 짝이 맞음
 */
var request = require('request');
var count = 1;


// setInterval(function(){
// 	console.time('responseTime');
// 	//request();
// 	//console.timeEnd('responseTime');
// },1000);

console.log('시작' + Date.now());
console.log('시작 카운트 :' + count);

//
setInterval(function A(){
    var start = Date.now();
    console.log('start');
    request({ url: 'http://localhost:3000/hi',}, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('end');
        var end = Date.now();
        var resTime = (end-start) / 1000;
        console.log('응답시간 : ' + resTime);
        count+=1;
    });
    return A;
}(),100);


// showWaitingMessage();
// setTimeout(function() {
// 	longTakingProcess();
// 	hideWaitingMessage();
// 	showResult();
// }, 0);

