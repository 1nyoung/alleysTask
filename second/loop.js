

var loop = function (stop, callback1, callback2){

    var count=0;

    var next = function(){
        count+=1

        if(count < stop){

            callback1(next, count);

        }else{
            callback2()
        }

    };

    next();
}

var log = function(){
    console.log('hihi')
}

module.exports = {
    log : log,
    loop : loop
}
