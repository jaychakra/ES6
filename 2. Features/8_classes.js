// ES 5

function Car(options) {
	this.title = options.title;
}

Car.prototype.drive = function() {
	return 'vroom';
}

function Toyota(options) {
	Car.call(this, options);
	this.color = options.color;
}

// For inheritence
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
	return 'Beep';
}

const toyota = new Toyota({title: 'Runner', color: 'Red'});

// ES 6

class Car {
	constructor(options) {
		this.title = options.title;
	}
	drive() {
		return 'vroom';
	}
}

class Toyota extends Car {
	constructor(options) {
		super(options);		// call car.constructor
		this.color = options.color;
	}
	honk() {
		return 'Beep';
	}
}


// Method overriding v/s method overloading
// Method overriding: The mehod SIGNATURE is same in parent and clild class
// Method overloading: The mehod SIGNATURE are different in parent and clild class