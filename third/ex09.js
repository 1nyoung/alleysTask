//돌아감
var c = 0;
function loop(stop, callback1, callback2){

	var count = 0;
	var next = function(id){


		if(id < stop){
			callback1(next, id);
			return next(id+1)
		}
		
		if(id >= stop){  // 종료조건
			callback2()
			return ;     // 함수종료
		}

	};

	next(count);
}

loop(10, function(next, id){

	console.log(id);
	//next();
}, function(){console.log('end')} );