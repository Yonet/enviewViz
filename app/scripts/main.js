//Line data
var lineData = [ {x: 760, y:0}, {x: 480, y: 1000} ];

//Description for the red line definition function.
var redLine = d3.svg.line()
	.x(function(d) { return d.x; })
	.y(function(d) { return d.y; })
	.interpolate("linear");



//Description for the orange line definition function.
//100px offset wasn't matching the image so I did change it to 180 instead.
var orangeLine = d3.svg.line()
	.x(function(d) { return d.x - 180; })
	.y(function(d) { return d.y; })
	.interpolate("linear");

//Description for the transparent orange line definition function.
var orangeLine2 = d3.svg.line()
	.x(function(d) { return d.x - 170; })
	.y(function(d) { return d.y; })
	.interpolate("linear");

//Selects the container and adds the image style.
var svg = d3.select("#container").append("svg")
	.attr('id', 'image');

//appends red line
var redLine = svg.append("path")
	.attr("d", redLine(lineData))
	.attr("stroke", "red")
	.attr("stroke-width", 5)                           
	.attr("fill", "none");

// appends orange line
var orangeLine = svg.append("path")
	.attr("d", orangeLine(lineData))
	.attr("stroke", "orange")
	.attr("stroke-width", 2)                           
	.attr("fill", "none");

var orangeLine2 = svg.append("path")
	.attr("d", orangeLine2(lineData))
	.attr({
		"stroke": "orange",
		"stroke-width": 20,
		"opacity": 0.2
	})

