'use strict';

function Person(name, firstname) {this.name=name || ''; this.firstname=firstname || '';}

Person.prototype.getName = function() {return this.firstname + ' ' + this.name;};

var roger = new Person('spielmann','roger');

console.log(roger.getName());


//ALTERNATIV

Person.prototype = {
	sayName: function()
};