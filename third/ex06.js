function loop(stop, callback1, callback2){

	var count = 0;
	var next = function(){};

	var A = function(i){
		if(i > stop-2){  // 종료조건
			if(callback2){
				return 
			}  


			return;     // 함수종료
		}

		next = function(i){
			return function(){
				if(i < stop-2)
					return A(i+1);
				return callback2()
			}
		}(i);

		callback1(next, i);

		next()         // i값을 증가한 후 자신을 호출
	};

	A(count);           // 함수 호출
}

loop(10, function(next, id){
	console.log(id);
	next();
}, function(){console.log('end')} );