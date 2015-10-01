var promise = new Promise(function(resolve, reject) {
    var success = true;

    if (success) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});
