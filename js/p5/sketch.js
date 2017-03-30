function setup() {
	createCanvas(1300, 1300);
	background(10);
}

function draw() {
	var red, green, blue;
	background(10);
	stroke(255);
	strokeWeight(4);
	for (var x = 0; x <= mouseX; x += 50) {
		for (var y = 0; y <= mouseY; y += 50) {
			red = map(x, 0, width/2, 230, 100);
			green = map(x, width/4, width*3/4, 100, 150)
			blue = map(x, width/2, width, 50, 150);
			fill(red, green, blue, 255);
			ellipse(x, y, 25, 25);
		}
	}
	for (var x = floor(mouseX/50)*50; x <= width; x += 50) {
		for (var y = floor(mouseY/50)*50; y <= height; y += 50) {
			red = map(x, 0, width/2, 230, 100);
			green = map(x, width/4, width*3/4, 100, 150)
			blue = map(x, width/2, width, 50, 150);
			fill(red, green, blue, 255);
			ellipse(x, y, 25, 25);
		}
	}
}