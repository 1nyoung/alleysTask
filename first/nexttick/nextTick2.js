//nextTick 이용해서 출력 순서 바꾸기

var count = 0;
process.nextTick(function () {
    for (var i = 0; i < 1000000000; i++) {
        count+=1;
    }
    console.log(1);
});
console.log(2);
process.nextTick(function () {
    console.log(3);
});
console.log(4);
console.log(5);


