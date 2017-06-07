//돌아감 완성본
function loop(stop, callback1, callback2){

	var count = 0;
	var next = function(){};

	var A = function(i){ 
		next = function(){
				if(i < stop){
					return A(i+1)
				}
		}
		if(i >= stop){  // 종료조건
			callback2()
			return ;     // 함수종료
		}
		callback1(next, i);
	};
	A(count);           // 함수 호출
}

loop(10, function(next, id){
	//next();
	console.log(id);
	//next();
}, function(){console.log('end')} );