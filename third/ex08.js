function loop(stop, callback1, callback2){
	console.log('  A')
	
	var count = 0;
	var next = function(){};
	console.log('  B')
	
	var A = function(i){ 
		console.log('  C')
	
		next = function(){ㅜ
				console.log('  D : ' + i)
				if(i < stop){
					console.log('  F : ' + i)
					return A(i+1)
				}
		}

		if(i >= stop){  // 종료조건
			console.log('  G : ' + i)
			callback2()
			return ;     // 함수종료
		}

		callback1(next, i);
		console.log('  H : ' + i)
	};
	console.log('  I')
	A(count);           // 함수 호출
}

loop(4, function(next, id){
	//console.log('  J')
	//next();
	console.log('  J')
	console.log(id);
	console.log('  K')
	next();
}, function(){console.log('end')} );