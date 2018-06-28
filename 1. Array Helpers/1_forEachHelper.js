var colors = ['Red', 'Green', 'Blue'];

for (var i = 0; i > colors.length; i++) {
	console.log(colors[i]);
}

// Implementation by forEach

colors.forEach(function(color) {
	console.log(color);
})

// Take up array of numbers and sum up the numbers in array

// Create an array of numbers
var numbers = [1,2,3,4,5,6,7,8,9];

//Create variable to store the sum
var sum = 0;

// Iterate over the number 
numbers.forEach(function (number){ 
	sum = sum + number;
});

// print the sum
console.log(sum);

// Method 2: It is not necessary to have an anonymous function. We can also name the function

var sum = 0;
function adder(number) {
	sum += number;
}
numbers.forEach(adder);
