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
	.attr({
		"d": redLine(lineData),
		"stroke": "red",
		"stroke-width": 5,
		"fill": "none"
	})

// appends orange line
var orangeLine = svg.append("path")
	.attr({
		"d": orangeLine(lineData),
		"stroke": "orange",
		"stroke-width": 2,
		"fill", "none"
	});

var orangeLine2 = svg.append("path")
	.attr({
		"d": orangeLine2(lineData),
		"stroke": "orange",
		"stroke-width": 20,
		"opacity": 0.2
	})

//Callout 1
var callouts = {
	one: [
		{
			"d": blueRing,
			"stroke": "blue",
			"stroke-width": ,
			"opacity": 1
		},
		{
			"d": whiteRing,
			"stroke": "white",
			"stroke-width": 2,
			"opacity": 1
		},
		{
			"d": blueTransparentRing,
			"stroke": "white",
			"stroke-width": 10,
			"opacity": 0,5
		}

	],
	two: [
		{
			"d": lightBlueRing,
			"stroke": "light-blue",
			"stroke-width": 5,
			"opacity": 1
		},
		{
			"d": blueTransparentRing,
			"stroke": "white",
			"stroke-width": 10,
			"opacity": 0,5
		}

	]
}



var createCallout = function(type){
	var circle = svg.append("circle")
      .attr("transform", "translate('500', '500')")
      .style("cursor", "pointer")
  if(type === "calloutOne"){
  	circle.attr({
  		"r": 5,
  		"stroke", "while",
  		"stroke-width": 2
  	})
  }
  circle.call(drag);
	return circle;
}

function click(e){
  // Ignore the click event if it was suppressed
  if (d3.event.defaultPrevented) return;
  var circle = e.target.id;
  console.log('circle clicked', circle);
  // Extract the click location\    
  var point = d3.mouse(this)
  , p = {x: point[0], y: point[1] };

  // Append a new callout
  var callout = createCallout(circle);
  
  // var circle = svg.append("circle")
  //     .attr("transform", "translate('500', '500')")
  //     .attr("class", circleClass)
  //     .style("cursor", "pointer")
  //     .call(drag);
}


// Define drag beavior
var drag = d3.behavior.drag()
    .on("drag", dragmove);

function dragmove(d) {
  var x = d3.event.x;
  var y = d3.event.y;

  d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
}

var header = d3.select('.header');
header.addEventListener('click', click);
