function loop(stop, callback1, callback2){

	var count = 0;

	var A = function(i){

		// if(i > stop-2){  // 종료조건
		// 	if(callback2){
		// 		callback2();
		// 	}
		// 	return;     // 함수종료
		// }

		var next = function (i){
			return function(){
				if(i > stop-2)
					return callback2();

				callback1(next, i);
				return A(i+1)
			}
		}(i);

		//callback1(next, i);
		next();
	};

	A(count);           // 함수 호출
}



loop(10, function(next, id){
	//console.log(id);
	//next();
	console.log(id)
	//next();
}, function(){console.log('end')} );