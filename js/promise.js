var promise = new Promise(function(resolveCb, rejectCb) {
    var success = false;

    if (success) {
        resolveCb("Stuff worked!");
    }
    else {
        rejectCb(new Error("It broke"));
    }
});

promise.then(resolveCallback, rejectCallback);

function resolveCallback(result) {
    console.log(result); // "Stuff worked!"
}

function rejectCallback(err) {
    console.error(err); // Error: "It broke"
}
