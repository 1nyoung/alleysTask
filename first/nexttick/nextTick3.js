function A(){
    console.log(1);
    //A();
    //process.nextTick(A);
}
function B(){
    console.log(2);
}

function C(){
    console.log(3);
}

function D(){
    console.log(4);
}

function E(){
    console.log(5);
}

A();
B();
C();
D();
E();

console.log(1,function(){
    console.log(44);
})

