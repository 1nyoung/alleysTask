// 돌아감 함수를 더만들다니...
function loop(stop, callback1, callback2){


	var count = 0;
	var next = function(){
		count +=1
		next2(count)
		return;
	}

	var next2 = function(id){

		if(id < stop-1){
			callback1(next, id);
			return; 
		}
		
		if(id >= stop-1){  // 종료조건
			callback1(callback2, id)
			return ;     // 함수종료
		}


	};

	next2(count);
}

loop(10, function(next, id){
	console.log(id);
	//next();
}, function(){console.log('end')} );