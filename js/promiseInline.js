var promiseMeSomething = new Promise(function(fulfillmentHandler, rejectionHandler) {

    /* some blocking code, therefore function is wrapped in a promise */

    //defines is function worked
    var worked = false;

    if (worked) {
        fulfillmentHandler('7');
    } else {
        rejectionHandler('error 213');
    }
});

promiseMeSomething.then(

    function (value) {
        console.log('Value is ' + value);
    },

    function (reason) {
        console.log('Reason is ' + reason);
    }
);