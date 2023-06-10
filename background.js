var mySize;
let rectWidth = 100;
let rectHeight = 100;
let reverse = false; // Flag to indicate if the rotation should be reversed
let startTime; // Variable to store the starting time

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style('display', 'absolute');
  canvas.style('z-index', '1');
  angleMode(DEGREES);

  startTime = millis(); // Store the starting time
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(93, 147, 225);

  push();
  translate(-40, 0);
  rotateX(60);
  noFill();
  blendMode(BLEND);

  if (reverse) {
    // Reverse the rotation
    rotate(-frameCount / 100);
  } else {
    rotate(frameCount / 100);
  }

  for (var i = 0; i < 50; i++) {
    beginShape();
    for (var j = 0; j < 180; j += 20) {
      var rad = i * 10;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;

      stroke(181, 214, 124);
      strokeWeight(1);
      vertex(x, y, z);
      vertex(-x, y, z);
    }
    endShape(CLOSE);
  }
  pop();

  // Check if 5 seconds have passed
  if (millis() - startTime >= 5000) {
    reverse = true; // Set the reverse flag to true
  }
}
