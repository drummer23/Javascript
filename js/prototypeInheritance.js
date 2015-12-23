var fruit = Object.create(null);
var apple = Object.create(fruit);
var banana = Object.create(fruit);

apple.color = 'green';
fruit.color = 'yellow';

console.log(apple.color);
console.log(banana.color);

apple.__proto__.form = 'round';

console.log(apple.form);
console.log(banana.form);
console.log(fruit.form);
