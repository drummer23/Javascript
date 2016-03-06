var cbFunction = function(a,b) {
    console.log('i expect 2 params');
    console.log('first is ' + a);
    console.log('second is ' + b);
};

function passMeACb(fn) {
    fn('AAA', 'BBB');
}

passMeACb(cbFunction);

