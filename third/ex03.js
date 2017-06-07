
 var forAsync = require('forAsync');

forAsync.up(0, 9, 1, function(i){
	console.log(i);
}, function(){
	console.log('end')
});