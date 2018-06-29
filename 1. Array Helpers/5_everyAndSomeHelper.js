var computers =[
	{ name: 'Apple', ram: 24},
	{ name: 'Compaq', ram: 4},
	{ name: 'Acer', ram: 32}
];

// Do we have computers with more than 16 GB of RAM  (Yes/No)?

var allComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

// Traditional way
for (var i = 0; i < computers.length; i++) {
	var computer = computers[i];
	if(computer.ram < 16) {
		allComputersCanRunProgram = false;
	}

	if(computer.ram > 16) {
		someComputersCanRunProgram = true;
	}
}

// Every helper ==> Condition satisfied by all elements ==> returns booloean (AND operation on all elements)
allComputersCanRunProgram =  computers.every(function(computer) {
	return computer.ram > 16;
});

// Some helper ==> Condition satisfied by some elements ==> returns booloean (OR operation on all elements)
someComputersCanRunProgram = computers.some(function(computer) {
	return computer.ram > 16;
})


// Real world application
function Field(value) {
	this.value = value;
}

Field.prototype.validate =  function() {
	return this.value.length > 0;
}

var username = new Field('This is cool');
var password = new Field('XYZCBD');
var birthdate = new Field('10/10/10'); 
// Validate all fields
var fields = [username, password, birthdate];

var fieldsAreValid = fields.every(function(field) {
	return field.validate();
})