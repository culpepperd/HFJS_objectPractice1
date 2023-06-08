// taxi object
var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,

	start: function () {
		this.started = true;
		console.log("You started the " + this.model + " engine.");
	},

	stop: function () {
		this.started = false;
		console.log("You stopped the " + this.model + " engine.");
	},

	drive: function () {
		console.log("You're attempting to drive the " + this.make + " " + this.model + ".");
		if (this.started) {
			alert(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
        }
    }
};

// cadillac object
var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,

	start: function () {
		this.started = true;
		console.log("You started the " + this.model + " engine.");
	},

	stop: function () {
		this.started = false;
		console.log("You stopped the " + this.model + " engine.");
	},

	drive: function () {
		console.log("You're attempting to drive the " + this.make + " " + this.model + ".");
		if (this.started) {
			alert(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

// fiat object
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,

	start: function () {
		this.started = true;
		console.log("You started the " + this.model + " engine.");
	},

	stop: function () {
		this.started = false;
		console.log("You stopped the " + this.model + " engine.");
	},

	drive: function () {
		console.log("You're attempting to drive the " + this.make + " " + this.model + ".");
		if (this.started) {
			alert(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

// chevy object
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,

	start: function () {
		this.started = true;
		console.log("You started the " + this.model + " engine.");
	},

	stop: function () {
		this.started = false;
		console.log("You stopped the " + this.model + " engine.");
	},

	drive: function () {
		console.log("You're attempting to drive the " + this.make + " " + this.model + ".");
		if (this.started) {
			alert(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

// prequalification function
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

taxi.drive();
cadi.start();
cadi.stop();
fiat.start();
fiat.drive();
chevy.start();
chevy.drive();
chevy.stop();

/*
var worthALook = prequal(chevy);

if (worthALook) {
	console.log("You gotta check out this " + chevy.make + " " + chevy.model + "!");
} else {
	console.log("You should really pass on the " + chevy.make + " " + chevy.model + "...");
}
*/