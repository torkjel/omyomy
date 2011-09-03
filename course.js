function Course(name, runners) {
	this.name = name;
	this.runners = runners;
	this.controls = [
	    new Control('Start', 0, 0),
	    new Control("1", 1, 3),
	    new Control("2", 2, 3),
	    new Control("3", 3, 3),
	    new Control("Finish", 4, 3)
	];
}

Course.prototype.length = function() {
	var length = 0;
	for (var i = 0; i < this.controls.length; i++) {
		length += this.controls[i].distanceFromPrevious;
	}
	return length;
};


Course.prototype.controlById = function(id) {
	for (var i = 0; i < this.controls.length; i++) {
		if (this.controls[i].id == id)
			return this.controls[i];
	}
};

function Control(name, id, distanceFromPrevious) {
	this.name = name;
	this.id = id;
	this.distanceFromPrevious = distanceFromPrevious;
}

