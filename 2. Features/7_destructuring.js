// ES5 

var expense = {
	type: 'Business',
	amount: '$45'
}

var type = expense.type;
var amaount = expense.amount;

// These duplicacy can be removed by destructuting

const expense1 = {
	typ: 'Business',
	amt: '$45'
}

// The property name should always be same as object property else it gets to undefined
const {typ, amt} = expense1;			// These are not objects but variables

console.log(typ, amt);


// Destructuring Arrays:
var comapnies = ['Google', 'Facebook', 'Uber'];

[c1, c2, c3] = companies;

// Destructuring arrays and objects at the same time
const companies = [
	{name: 'Google', location: 'Mountain View'},
	{name: 'Facebook', location: 'Menlo Park'},
	{name: 'Uber', location: 'San Fransisco'},
];

const [{location}] = companies; // Location of the first company

// Destructuring objects and arrays

const Google = {
	locations: ['Mountain View', 'New York', 'London']
}

const {locations:[loc]} // loc will have mountain view
// Practical Use case


// Fantastic Case: Convert the points to an array of objects [{x: x, y:y}, ...];

const points  = [
	[4,5],
	[10,1],
	[0,40]
];


const obj = points.map(([x,y]) => {
	return {x,y};
})

// or

const obj1 = points.map(([x,y]) => {x,y});



