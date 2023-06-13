var divsArray = [];
var rotateVal = 0;

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    var divId = 'g' + i + '-' + j;
    var divElement = document.getElementById(divId);
    divsArray.push(divElement);
  }
}

var notActive = [divsArray[1], divsArray[4], divsArray[6], divsArray[9], divsArray[10], divsArray[11], divsArray[13], divsArray[17], divsArray[18], divsArray[19], divsArray[20], divsArray[23], divsArray[24]];
var active = [divsArray[0], divsArray[2], divsArray[3], divsArray[5], divsArray[7], divsArray[8], divsArray[12], divsArray[14], divsArray[15], divsArray[16], divsArray[21], divsArray[22]];

var colors2 = ['#51f542', '#7ad672', '#729c6e', '#729c6e'];
var colors = ['#fcff4f', '#fcff36', '#fdff8f', '#ffce47'];

for (let e = 0; e < notActive.length; e++) {
  notActive[e].addEventListener("click", function() {
    rotateVal = rotateVal + 90;

    for (let o = 0; o < active.length; o++) {
      active[o].style.border = "1px solid white";
      active[o].style.backgroundColor = 'transparent';

      active[o].style.rotate = Math.floor(Math.random() * 180) + 'deg';
      setTimeout(function() {
        active[o].style.rotate = '0deg';
      }, 200);

      for (let x = 0; x < notActive.length; x++) {
        var randomIndex = Math.floor(Math.random() * colors.length);
        var randomString = colors[randomIndex];
        notActive[x].style.backgroundColor = randomString;

        const pTags = notActive[x].getElementsByTagName('p');
        for (let j = 0; j < pTags.length; j++) {
          pTags[j].style.color = 'black';
        }
      }

      var randomIndex2 = Math.floor(Math.random() * colors2.length);
      var randomString2 = colors2[randomIndex];
      active[o].style.border = "2px solid " + randomString2;
      notActive[e].style.rotate = rotateVal + "deg";    }
  });
}

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


}
