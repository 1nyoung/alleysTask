//마무리...!

function loop(stop, callback1, callback2){

	var count=0;

	var next = function(){
	 	count+=1

		if(count < stop){
			callback1(next, count);
			console.log('hi')
		}else{  
			callback2()
		}

	};
	next();
}


loop(10, function(next, id){
	console.log(id);
	next();
}, function(){console.log('end')} );