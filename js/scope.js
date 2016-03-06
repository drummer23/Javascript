var outer = "77";

someFunction();


function someFunction () {
    var inner = '80';

    console.log('from inside');
    console.log(outer);
    console.log(inner);
}

console.log('from outside');
console.log(outer);
console.log(inner);
