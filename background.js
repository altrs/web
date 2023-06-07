function setup (){
	var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.style('display', 'block');
	angleMode(DEGREES);
}

function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(96, 124, 217);
	translate(-40, 0);
	rotateX(60);
	noFill();
	blendMode(BLEND);

	for(var i = 0; i < 50; i++){

		 // var r = map(sin(frameCount/2), -1, 1, 100, 200);
		 // var g = map(i, 0, 50, 100, 200);
		 // var b = map(cos(frameCount), -1, 1, 200, 100);
		 // stroke(r,g,b);

		rotate(frameCount/100);

		beginShape();
		for(var j = 0; j < 180; j += 30){
			var rad = i * 10;
			var x = rad * cos(j*4);
			var y = rad * sin(j*4);
			var z = sin(frameCount * 2 + i * 5) * 25;
			
			stroke(90, 172, 134);
			strokeWeight(5);
			vertex(x, y ,z);

			stroke(132, 160, 36);
			strokeWeight(5);
			vertex(x, y ,z);
		}
		endShape(CLOSE);
	}

	blendMode(OVERLAY);
	rotateX(60);
	for(var i = 0; i < 50; i++){
		rotate(frameCount/100);

		beginShape();
		for(var j = 0; j < 360; j += 20){
			var rad = i * 10;
			var x = rad * cos(j) + 100 / i;
			var y = rad * sin(j) - 100 * sin(i);
			var z = sin(frameCount * 2 + i * 5) * 50;
			
			stroke(30);
			strokeWeight(1);
			vertex(x, y ,z);
		}
		endShape(CLOSE);


	}
}

