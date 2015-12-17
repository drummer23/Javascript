//a counter realized without loops
var i = 0;

function count() {
        console.log(i++);
        i > 50 || count();
}

count();


//the same as above as IIFE
var ii = 0;

(function count2() {
        console.log(ii++);
        ii > 30 || count2();
})();