var font;
var words = [];
var loops = [];
var colo;

// Lines connecting points to fill letter

function preload() {
  font = loadFont('Dosis-ExtraBold.ttf');
}

function setup() {
  createCanvas(800, 300, P2D);
  frameRate(60);

  words.push('tim');
  words.push('shur');

  var points = font.textToPoints(words[0], 50, 200, 192, {
    sampleFactor: 0.12
  });

  points = points.concat(font.textToPoints(words[1], 400, 200, 192, {
    sampleFactor: 0.12
  }));

  MAX_DIST = 1.5 * dist(points[0].x, points[0].y, points[1].x, points[1].y);

  var i;
  for (i = 0; i < points.length; i++) {
    // Add vehicles to a loop
    var loop_ = new Loop();
    for ( ; i < points.length; i++) {
      if (i != points.length-1 && !closeEnough(points[i], points[i+1]))
        break;

      var pt = points[i];
      loop_.add(new Vehicle(random(width), random(height), pt.x, pt.y));
    }

    if (i < points.length) {
      var pt = points[i];
      loop_.add(new Vehicle(random(width), random(height), pt.x, pt.y));
    }

    loop_.initializeLinks();
    loops.push(loop_);
  }
}

function draw() {
  background(0, 0, 0);

  for (var i = loops.length-1; i >= 0; i--) {
    loop_ = loops[i];
    if (loop_.update()) {
      loop_.show();
      //if (frameCount % 20 == 0)
      //  loop_.cycle();
    } else {
      loops.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (var i = loops.length-1; i >= 0; i--) {
    loops[i].explode();
  }
}

function closeEnough(pt1, pt2) {
  var d = sqrt(sq(pt2.x - pt1.x) + sq(pt2.y - pt1.y));
  return d < MAX_DIST;
}

function distSq(x1, x2, y1, y2) {
  return pow(x2-x1,2) + pow(y2-y1,2);
}

function lineIntersects(pos1s, pos1f, pos2s, pos2f) {
  A1 = pos1f.y-pos1s.y;
  B1 = pos1s.x-pos1f.x;
  C1 = A1*pos1s.x + B1*pos1s.y;

  A2 = pos2f.y - pos2s.y;
  B2 = pos2s.x - pos2f.x;
  C2 = A2*pos2s.x + B2*pos2s.y;
  // Lines are now of the form Ax + By = C

  var det = A1*B2 - A2*B1;
  if (det === 0) {
    return false;  // parallel
  } else {
    var x = (B2*C1 - B1*C2)/det;
    var y = (A1*C2 - A2*C1)/det;

    maxSegx = (pos2f.x > pos2s.x) ? (pos2f.x) : (pos2s.x);
    minSegx = (pos2f.x < pos2s.x) ? (pos2f.x) : (pos2s.x);

    if (x >= maxSegx || x <= minSegx) // not on segment
      return false;

    return true;
  }
}

function distLinetoPoint(lineStart, lineEnd, Point) {
  AB = p5.Vector.sub(lineEnd, lineStart);
  AC = p5.Vector.sub(Point, lineStart);
  return (AB.x * AC.y - AB.y * AC.x) / AB.mag()
}
