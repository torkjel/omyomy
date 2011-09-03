function Graph(canvas, results) {
	this.canvas = canvas;
	this.results = results;
}

Graph.prototype.draw = function(courseName) {
	var headerHeight = 20;
	var marginTop = 20;
	var marginLeft = 40;
	var marginRight = 40;
	var marginBottom = 20;
	var font = "12pt Sans serif";
	var backgroundColor = "#99f";
	var splitColors = ["#bbf", "#ddf"];
	var runnerColors = ["red", "blue", "green", "yellow"];
	var textColor = "black";

	var ctx = this.canvas.getContext("2d");
	ctx.font = font;

	var wdt = this.canvas.width;
	var hgt = this.canvas.height;

	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, wdt, hgt);

	ctx.fillStyle = textColor;
	var courseNameWdt = ctx.measureText(courseName).width;
	ctx.fillText(courseName, wdt / 2 - courseNameWdt / 2, headerHeight - 4);

	var graphWdt = wdt - marginLeft - marginRight;
	var graphHgt = hgt - headerHeight - marginTop - marginBottom;

	var course = this.results.courses[courseName];
	var courseLength = course.length();
	var coursePosition = 0;

	var xcoords = new Array();

	for (var i = 0; i < course.controls.length; i++) {
		var control = course.controls[i];
		var x = coursePosition / courseLength * graphWdt + marginLeft;
		var w = control.distanceFromPrevious / courseLength * graphWdt;
		ctx.fillStyle = splitColors[i & 1];
		ctx.fillRect(x, marginTop + headerHeight, w, graphHgt);

		ctx.fillStyle = textColor;
		var controlNameWdt = ctx.measureText(control.name).width;
		ctx.fillText(control.name, x + w - controlNameWdt / 2, marginTop + headerHeight - 4);

		coursePosition += control.distanceFromPrevious;
		xcoords.push(coursePosition / courseLength * graphWdt + marginLeft);
	}

	var slowest = this.results.slowestTime(courseName);


	for (var i = 0; i < course.runners.length; i++) {

		ctx.strokeStyle = runnerColors[i & 3];
		alert(ctx.strokeStyle);

		ctx.beginPath();
		ctx.moveTo(marginLeft,  headerHeight + marginTop);

		var runner = course.runners[i];
		var splits = this.results.splitTimes[runner];
		for (var j = 0; j < course.controls.length; j++) {
			var control = course.controls[j];
			var splitTime = splits[control.id];
			ctx.lineTo(xcoords[j], headerHeight + marginTop + (splitTime / slowest * graphHgt));
		}

		ctx.stroke();
		ctx.closePath();
	}
};

