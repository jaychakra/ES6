// Syntactic sugar

const add = function (a, b) {
	return a + b;
}


// ES6 version, no need of anonymous function can be represented by fat arrow notation

const add1 = (a,b) => {
	return a + b;
}

// If there is only one line then even the braces and return can be eliminated

const add2= (a, b) => a + b;

// if there is only one argument then we can even remove the opening/closing braces

const double =  num => 2*num;


// Example usage, double number

const numbers = [1,2,3,4,5,67,98,9];



const dbl = numbers.map(number => number*2);


// Lexical this implies in fat arrow function. That is this is evaluated as per surrounding context
// Ex: 

// This wont work As the inner most this is not defined. This is solved by fat arrow function
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function () {
		 return this.members.map(function(member) {
		 	return `${member} is on team ${this.teamName}`;
		 });
	}
}

console.log(team.teamSummary());

const team1 = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		 return this.members.map((member) => {
		 	return `${member} is on team ${this.teamName}`;
		 });
	}
}

console.log(team1.teamSummary());