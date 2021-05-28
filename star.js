// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Star(x, y, speed) {
  this.x = x;
  this.y = y;
  this.r = speed;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(254);
    push();
    translate(this.x, this.y);
    //angleMode(DEGREES);
    //rotate(floor(random(360)));
    starshape(0, 0, 5, speed / 2, 4);
    pop();
  
    //ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.vaporize = function() {
    this.toDelete = true;
  };

  this.unseen = function() {
    if (this.y >= height) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function() {
    this.y = this.y + speed + 1;
  };
}

function starshape(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
