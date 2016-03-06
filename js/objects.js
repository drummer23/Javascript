var someObject = {

    varString : 'some String',

    someFunction : function(param) {
        console.log('say ' + param)
    }

};



var instance = someObject;

instance.someFunction('mpc');

console.log(instance.varString);
console.log(typeof instance.toString);
