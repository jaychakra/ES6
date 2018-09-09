// Write a loop that iterates over a list of number doubles the value of each number and pushes it in a new array

var numbers = [1,2,3];
var doubleNumbers =  [];

for (var i =0; i < numbers.length; i++) {
	doubleNumbers[i] =  2*numbers[i];
}

// Using map;

var doubled = numbers.map(function (number) {
	return number * 2;   // Here return is IMP
})

// Plucking properties of objects
var cars = [
	{ model:'Nano', price: 'Cheap' },
	{ model:'Range Rover', price: 'Expensive'}
];

var prices = cars.map(function(car) {
	return car.price;
});

