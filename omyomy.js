window.onload = init;

function init() {
    var runners = [
		new Runner("Kalle Klovn"),
		new Runner("Postmann Pat"),
		new Runner("Brannmann Sam"),
		new Runner("Byggmester Bob")
	];
    var courses = {
   		'long' : new Course('long', ["Kalle Klovn", "Postmann Pat", "Brannmann Sam", "Byggmester Bob"])
    };
    var splitTimes = {
   		"Kalle Klovn" : 	{0 : 0, 1 : 2, 2 : 5, 3 : 9, 4 : 10},
   		"Postmann Pat" : 	{0 : 0, 1 : 3, 2 : 6, 3 : 8, 4 :  9},
   		"Brannmann Sam" :	{0 : 0, 1 : 4, 2 : 8, 3 : 9, 4 : 14},
   		"Byggmester Bob" : 	{0 : 0, 1 : 3, 2 : 5, 3 : 6, 4 : 18}
	};
    var results = new Results(runners, courses, splitTimes);

    var graph = new Graph(document.getElementById("c"), results);

    graph.draw('long');
};

function main_loop() {
}
