process.nextTick(function () {
    console.log(1);
});
console.log(2);
process.nextTick(function () {
    console.log(3);
});
console.log(4);
console.log(5);


