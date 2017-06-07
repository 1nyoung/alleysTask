//마무리...!

function loop(stop, callback1, callback2){
	
	var count=0;
console.log(' A : ' + count)
	var next = function(){
	 	count+=1
	 	console.log(' B : ' + count)

		if(count < stop){
			console.log(' C : ' + count)
			callback1(next, count);
			console.log(' D : ' + count)
		}else{  
			console.log(' E : ' + count)
			callback2()
			console.log(' F : ' + count)
		}
		console.log(' G : ' + count)
	};

	next();
	console.log(' H : ' + count)
}


loop(10, function(next, id){
	process.nextTick(function(){
	console.log(' I : ')
	console.log(id);
	console.log(' J : ')
	next();
		})
	console.log(' k : ')
}, function(){console.log('end')} );
	console.log(' L : ')
		console.log(' L : ')
			console.log(' L : ')
				console.log(' L : ')