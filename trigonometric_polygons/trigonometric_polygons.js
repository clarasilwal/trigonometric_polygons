
var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var diameter; 
var angle = 0;


function setup() {
  createCanvas(1000, 600, SVG);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  noStroke();
  diameter = height - 10;
  frameRate();
}

function draw() {
  background(242, 242, 242);
  calcWave();
  renderWave();

  for (var i = 1; i <= 10; i++) 
  {
      fill (random (240,250), random (150, 200), random (150, 200));
      var d = 10 + (sin(angle + PI/i) * diameter/2) + diameter/2;
      var e = 10 + (cos(angle + PI/i) * diameter/2) + diameter/2;
      polygon((width / 10) * i, d, 56, 4);
      polygon((width / 5) * i, e, 60, 3);
  }

  for (var i = 1; i <= 10; i++) 
  {
      fill (random (200,255), random (150, 255), random (200, 255));
      var d = 20+ (sin(angle + PI/i) * diameter/2) + diameter/2;
      var e = 15 + (cos(angle + PI/i) * diameter/2) + diameter/2;
      polygon((width / 10) * i, d, 56, 4);
      polygon((width / 5) * i, e, 60, 3);
  }
  for (var i = 1; i <= 10; i++) 
  {
      fill (18,153,214);
      var d = 20+ (tan(angle + PI/i) * diameter/2) + diameter/4;
      var e = 50 + (tan(angle + PI/i) * diameter/2) + diameter/4;
      polygon((width / 10) * i, d, 21, 7);
      polygon((width / 5) * i, e, 60, 5);
  }
  angle += 0.02;


}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.01;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = tan(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(18,153,214);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    polygon(2*x*xspacing, height/1.25+yvalues[x], 10, 6); 
  }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

// this function is called any time a key is pressed
function keyTyped() 
{
    // just press any button to save your canvas as an svg
    saveSVG();
}