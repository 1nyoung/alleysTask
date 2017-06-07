// for (var i = 0; i < 1000; i++){
// 	console.log(i)
// }
// console.log('end')


function loop(a, callback){
	for (var i = 0; i < a; i++){
		var idx = i;
		callback(idx);
	}
}

loop(10, function(id){
	console.log(id);
});

//-------------------------------------------------

function loop(a, callback){
	for (var i = 0; i < a; i++){
		var idx = i;
		callback(idx);
	}
	var next = function(){

	}
	callb
}

loop(10, function(next, id){
	console.log(id);
	next(); //다음 매개변수로 입력한 함수를 실행
//});
}, function(){
	console.log('end');
});



// loop(1000, function (next, idx) {
// console.log(idx)
// next()
// }, function () {
// console.log('end')
// })