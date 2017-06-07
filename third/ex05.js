

function loop(stop, callback1, callback2){

	var count = 0;
	var next = function(){ 
	};

	// var A = function(i){
	// 	if(i > stop-2){  // 종료조건
	// 		if(callback2){
	// 			callback1(next, i);

	// 		}  
	// 		return;     // 함수종료
	// 	}
	// 	callback1(next, i);
	// 	A(i+1);         // i값을 증가한 후 자신을 호출
	// };

	function A(){
		callback2;
		return;
	}

	callback1(A, '1')
	var check = true;
	var next = function(){ 
		return true;
	};

	if(check){
		callback2();
		return;
	}else{
		//A(count);           // 함수 호출
	}

}


loop(10, function(next, id){
	next();
	console.log(id);
	//next();
}, function(){console.log('end')} );
























