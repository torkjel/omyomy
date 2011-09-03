function Results(runners, courses, splitTimes) {
    this.runners = runners;
    this.courses = courses;
    this.splitTimes = splitTimes;
}

Results.prototype.slowestTime = function(courseName) {
	var course = this.courses[courseName];
	var slowest = -1;
	for (var i = 0; i < course.runners.length; i++) {
		var runnerName = course.runners[i];
		var splits = this.splitTimes[runnerName];
		for (var j = 0; j < course.controls.length; j++) {
			var control = course.controls[j];
			var splitTime = splits[control.id];
			if (splitTime > slowest)
				slowest = splitTime;
		}
	}
	return slowest;
};
