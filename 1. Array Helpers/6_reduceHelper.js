// Most flexible every other helper can be generated from reduce helper

// Ex1: Finding sum of array
var numbers  = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;

for(var i=0; i < numbers.length; i++) {
	sum = sum + numbers[i];
}

console.log(sum);

// Same logic via reduce

var sumRed = numbers.reduce(function(init, number) {
	return init + number;
}, 0); // Zero here is initial value of init argument

console.log(sumRed);


// Another example: Primary Colors. Get all the values of colour in an array using reduce

var primaryColours =  [
	{ color: 'red'},
	{ color: 'green'},
	{ color: 'blue'},
];

var colors =  primaryColours.reduce(function (previous, color) {
	previous.push(color.color);
	return previous;
}, []);

console.log(colors);


// Practical example: Check balanced paranthesis of single type of paranthesis
var paranthesis = '((((()))))()()';

var count = paranthesis.split("").reduce(function(prev, char) {
	return (char==='(') ? prev++ : prev--;
}, 0)

