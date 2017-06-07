var request = require('request');

setInterval(function(){
    console.time('responseTime');
    request({ url: 'http://localhost:3000/hi',}, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        console.timeEnd('responseTime');
    });
},1000);
