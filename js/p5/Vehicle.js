var SLOW_DIST = 100;
var FLEE_DIST = 50;

function Vehicle(posx, posy, x, y) {
  this.pos = createVector(posx, posy);
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D(); this.vel.mult(5);
  this.acc = createVector();
  this.r = 3;
  this.maxspeed = 5;
  this.maxforce = 0.3;
  this.col = colo;

  this.connections = [];
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var flee = this.flee(createVector(mouseX, mouseY));

  arrive.mult(1);
  flee.mult(15);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(force) {
  this.acc.add(force);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
  if (this.pos.x <= -this.r - 150 || this.pos.x >= width  + this.r + 150 ||
      this.pos.y <= -this.r - 150 || this.pos.y >= height + this.r + 150)
    return false;
  return true;
}

Vehicle.prototype.show = function() {
  stroke(this.col);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();

  var speed = this.maxspeed;
  if (d < SLOW_DIST)
    speed = map(d, 0, 100, 0, this.maxspeed);

  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < FLEE_DIST) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }
  return createVector(0, 0);
}

Vehicle.prototype.explode = function(x, y) {
  dir = p5.Vector.random2D();
  dir.setMag(random(5, 10));
  this.vel = dir;
}

Vehicle.prototype.addConnection = function(index) {
  this.connections.push(index);
}

Vehicle.prototype.hasConnection = function(index) {
  // could do binary search
  for (var i = 0; i < this.connections.length; i++) {
    if (this.connections[i] == index)
      return true;
  }
  return false;
}

Vehicle.prototype.showConnections = function() {
  for(var i = 0; i < this.connections.length; i++) {
    var d = dist(this.pos.x, this.pos.y, this.connections[i].pos.x, this.connections[i].pos.y);
    if (d < 100) {
      var a = map(d, 0, 100, 255, 0);
      stroke(red(this.col), green(this.col), blue(this.col), a);
      strokeWeight(0.2);
      line(this.pos.x, this.pos.y, this.connections[i].pos.x, this.connections[i].pos.y);
    }
  }
}

Vehicle.prototype.showConnection = function(vehicle) {
  var d = dist(this.pos.x, this.pos.y, vehicle.pos.x, vehicle.pos.y);
  if (d < 100) {
    var a = map(d, 0, 100, 255, 0);
    stroke(red(this.col), green(this.col), blue(this.col), a);
    strokeWeight(0.2);
    line(this.pos.x, this.pos.y, vehicle.pos.x, vehicle.pos.y);
  }
}
