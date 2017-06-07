 var fs = require('fs');

function loop(stop, callback1, callback2){

	var count = 0;
	var next = function(){}

	var i = setInterval(function(){

		callback1(next, count);
		count ++;

		if(count == stop-1){
			clearInterval(i);
			next = callback2;
			callback1(next, count);
		}
	}, 0);
}

loop(10, function(next, id){
	console.log(id);
	next();
}, function(){console.log('end')} );

 // loop(10, function(next, id){
 // 	console.log(id)
 // 	fs.readFile('sample.rtf', function(err, stats){
 // 		console.log(err,stats)
 // 		next()
 // 	})
 // }, function(){console.log('end')})