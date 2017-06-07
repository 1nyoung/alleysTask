var request = require('request');

var winston = require('winston');
require('date-utils');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: function(){return new Date().toFormat('YYYY-MM-DD HH24:MI:SS')}
        })
    ]
});


setInterval(function(){
    logger.log('info', '요청', {etc: '기타메시지'});
    request({ url: 'http://localhost:3000/hi',}, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        logger.log('info', '응답', {etc: '기타메시지'});
    });
},1000);
