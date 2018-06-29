// Syntactic sugar

// ES5

function getMessage() {
	var year =  new Date().getFullYear();

	return "The year is : " + year
}


// ES6
function getMessageES6() {
	const year =  new Date().getFullYear();
	return `The year is : ${year}`;
}