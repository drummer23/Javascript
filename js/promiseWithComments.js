// i'll do something and than either call a or b
var promise = new Promise(function(A, B) {
    var x = true;
    var msg = 'random message';

    if (x) {
        A(msg);
    }
    else {
        B(msg);
    }
});

// allright - do it, when your finished call one of those functions i give you
promise.then(CallbackA, CallbackB);

// i ouput A and the variable something
function CallbackA(something) {
    console.log('Output A: ' + something);
}

// i ouput B and the variable result
function CallbackB(something) {
    console.log('Output B: ' + something);
}