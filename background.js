var divsArray = [];
var rotateVal = 0;

var vid;

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    var divId = 'g' + i + '-' + j;
    var divElement = document.getElementById(divId);
    divsArray.push(divElement);
  }
}

var notActive = [divsArray[1], divsArray[4], divsArray[6], divsArray[9], divsArray[10], divsArray[11], divsArray[13], divsArray[17], divsArray[18], divsArray[19], divsArray[20], divsArray[23], divsArray[24]];
var active = [divsArray[0], divsArray[2], divsArray[3], divsArray[5], divsArray[7], divsArray[8], divsArray[12], divsArray[14], divsArray[15], divsArray[16], divsArray[21], divsArray[22]];

//var colors = ['#fc7253', '#fa472f', '#fc6753'];
var colors = ['#fcff4f', '#fcff36', '#fdff8f', '#ffce47'];

for(let e=0; e<notActive.length; e++){
  //notActive[e].style.border = "1px solid red";

  notActive[e].addEventListener("click", function() {
    rotateVal = rotateVal + 90;
    for(let o=0; o<active.length; o++){
      active[o].style.border = "1px solid white";
      var randomIndex = Math.floor(Math.random() * colors.length);
      var randomString = colors[randomIndex];
      active[o].style.backgroundColor = randomString;
      active[o].style.border = "1px solid" + randomString;
      notActive[e].style.rotate = rotateVal + "deg";
    }
  });
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style('display', 'absolute');
  canvas.style('z-index', '1');
  angleMode(DEGREES);

  vid = createVideo("assets/texture.mp4");
  vid.size(width, height);
  vid.loop();
  vid.hide();
  vid.volume(0);

  startTime = millis(); // Store the starting time
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(77, 95, 232);

  image(vid, 0, 0);

  // rotateX(60);
  // noFill();
  // blendMode(BLEND);

  // for(let i = 0; i < 50; i++){
  //   push();
  //   rotateX(-60);
  //   rotate(frameCount / 2);
  //   stroke(252, 104, 45);
  //   strokeWeight(8+i);
  //   ellipse(0, 0, 100*i, 50*i);
  //   stroke(114, 173, 106);
  //   ellipse(1, 1, 100*i, 50*i);
  //   pop();
  // }

}
