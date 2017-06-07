
function loop(a, callback){

	var next = function(){
		console.log(idx)
	}

	for (var i = 0; i < a; i++){
		var idx = i;
		callback(next, idx);

	}
	//callback(next, idx);
}

loop(10, function(next, id){
	console.log(id);
	next(); //다음 매개변수로 입력한 함수를 실행
});
