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
	fuel: 0,

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
	},

	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
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
	fuel: 0,

	start: function () {
		if (this.fuel > 0) {
			this.started = true;
			console.log("You started the " + this.model + " engine, and you have " + this.fuel + " gallons of fuel.");
		} else {
			console.log("You need to add fuel.");
        }

	},

	stop: function () {
		this.started = false;
		console.log("The " + this.model + " engine is stopped.");
	},

	drive: function () {
		// console.log("You're attempting to drive the " + this.make + " " + this.model + ".");
		if (this.started) {
			alert(this.make + " " + this.model + " goes zoom zoom!");
			this.fuel = this.fuel - 1;
		} else {
			alert("You need to start the engine first.");
		}
	},

	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
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

chevy.addFuel(5);

while (chevy.fuel > 0) {
	console.log("Fuel level in " + chevy.make + " " + chevy.model + " is: " + chevy.fuel + " gallons.");
	console.log("Let's take her for a spin!");
	if (chevy.started) {
		chevy.drive();
	} else {
		console.log("You need to start the car first...");
		chevy.start();
	}

	if (chevy.fuel == 0) {
		console.log("Fuel level in " + chevy.make + " " + chevy.model + " is: " + chevy.fuel + " gallons.");
		chevy.stop();
    }
}



/*
// "for in" loop iterates through an object's properties
for (var prop in chevy) {
	console.log(prop + ": " + chevy[prop]);
}
*/

/*
var worthALook = prequal(chevy);

if (worthALook) {
	console.log("You gotta check out this " + chevy.make + " " + chevy.model + "!");
} else {
	console.log("You should really pass on the " + chevy.make + " " + chevy.model + "...");
}
*/