console.log ('this on top layer:');
console.log (this);

someFunction();


function someFunction () {
    console.log('this from within a function:');
    console.log(this);
}

