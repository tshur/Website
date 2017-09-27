function Loop() {
  this.vehicles = [];
  this.size = 0;
  this.cyclePos = 0;
  colo = color(random(255), random(255), random(255));
}

Loop.prototype.add = function(vehicle) {
  this.vehicles.push(vehicle);
  this.size++;
}

Loop.prototype.cycle = function() {
  tempTarget = this.vehicles[0].target;
  tempConnections = this.vehicles[0].connections;
  for (var i = 0; i < this.size - 1; i++) {
    this.vehicles[i].target = this.vehicles[i+1].target;
    this.vehicles[i].connections = this.vehicles[i+1].connections;
  }
  this.vehicles[this.size - 1].target = tempTarget;
  this.vehicles[this.size - 1].connections = tempConnections;

  this.cyclePos = (this.cyclePos + 1) % this.size;
}

Loop.prototype.update = function() {
  for (var i = this.size - 1; i >= 0; i--) {
    var v = this.vehicles[i];
    if (v.update()) {
      v.behaviors();
    } else {
      this.vehicles.splice(i, 1);
      this.size--;
    }
  }

  if (this.size === 0)
    return false
  return true
}

Loop.prototype.show = function() {
  for (var i = 0; i < this.size; i++) {
    var v1 = this.vehicles[i];
    v1.show();

    for (var j = 0; j < v1.connections.length; j++) {
      v1.showConnection(this.vehicles[(v1.connections[j] - this.cyclePos + this.size) % this.size]);
    }

    //var vnext = this.vehicles[(i+1) % this.size];

    // var dir = p5.Vector.sub(vnext.pos, v.pos);
    // var normal = dir.rotate(HALF_PI);
    // normal.setMag(30);

    // var d = 30;
    // if (d < 200) {
    //   var a = map(d, 0, 200, 255, 0);
    //   stroke(red(v.col), green(v.col), blue(v.col), a);
    //   strokeWeight(0.3);
    //   line(v.pos.x, v.pos.y, v.pos.x + normal.x, v.pos.y + normal.y);
    // }

    // var d = dist(v.pos.x, v.pos.y, v.target.x, v.target.y);
    // if (d < 100) {
    //   var a = map(d, 0, 100, 255, 0);
    //   stroke(red(v.col), green(v.col), blue(v.col), a);
    //   strokeWeight(0.1);
    //   line(v.pos.x, v.pos.y, v.target.x, v.target.y);
    // }

    // for (var j = 0; j < this.size; j++) {
    //   if (j == i)
    //     continue;
    //   var v2 = this.vehicles[j];
    //   var vnext = this.vehicles[(j+1) % this.size];

    //     var d = dist(v.pos.x, v.pos.y, v2.pos.x, v2.pos.y);
    //     if (d > 35 && d < 60) {
    //       var a = map(d, 35, 60, 255, 0);
    //       stroke(red(v.col), green(v.col), blue(v.col), a);
    //       strokeWeight(0.2);
    //       line(v.pos.x, v.pos.y, v2.pos.x, v2.pos.y);
    //     }
    // }
  }
}

Loop.prototype.initializeLinks = function() {
  for (var i = 0; i < this.size; i++) {
    var v1 = this.vehicles[i];

    var v1next = this.vehicles[(i+1) % this.size];

    var normal1 = p5.Vector.sub(v1next.target, v1.target);
    normal1.rotate(HALF_PI);

    for (var j = 0; j < this.size; j += round(random(3,5))) {
      if (abs(j-i) <= 3)
          continue;

      var v2 = this.vehicles[j];
      var contained = true;

      var v2next = this.vehicles[(j+1) % this.size];
      var normal2 = p5.Vector.sub(v2next.target, v2.target);
      normal2.rotate(HALF_PI);

      var vecLong = p5.Vector.sub(v2.target, v1.target);
      var theta = p5.Vector.angleBetween(vecLong, normal1);
      if (theta > 0.9*HALF_PI && theta < TWO_PI - 0.9*HALF_PI ||
          p5.Vector.dot(normal1, normal2) >= 0)
        continue;

      //var d = dist(v2.target.x, v2.target.y, v1.target.x, v1.target.y);
      //if (d > 200)
      //  continue;

      for (var k = 0; k < this.size; k++) {
        if (k == i || abs(k-j) < 2)
          continue;

        var v3 = this.vehicles[k];

        var vecShort = p5.Vector.sub(v3.target, v1.target);
        if (p5.Vector.angleBetween(vecLong, vecShort) < 0.1 &&
            p5.Vector.sub(vecLong, vecShort).mag() > 0) {
          contained = false;
          break;
        }

        // if (distLinetoPoint(v1.target, v2.target, v3.target) <= 20) {
        //   var v3next = this.vehicles[(k+1) % this.size];
        //   if (lineIntersects(v1, v2, v3, v3next)) {
        //     contained = false;
        //     break;
        //   }
        // }
      }

      if (contained && !v2.hasConnection(i)) {
        v1.addConnection(j);
      }
    }
  }
}

Loop.prototype.explode = function() {
  for (var i = 0; i < this.size; i++) {
    this.vehicles[i].explode();
  }
}
