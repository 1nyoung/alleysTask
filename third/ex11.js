//돌아감
var c = 0;
function loop(stop, callback1, callback2){

	var count=0;
	console.log('A : ' + count)
	var next = function(){
			count++
			console.log('B : '+ count)
		if(count < stop){
				console.log('C : '+ count)
			callback1(next, count);
				console.log('D : '+ count)
			count++
				console.log('E : '+ count)
			return
		}
			console.log('F : '+ count)
		if(count >= stop){  // 종료조건
			callback2()
			return ;     // 함수종료
		}
			console.log('G : '+ count)

	};

	next();
}

loop(10, function(next, id){
			console.log('H : '+ id)
	console.log(id);
				console.log('I : '+ id)
	next();
}, function(){console.log('end')} );