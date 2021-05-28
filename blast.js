
function Blast(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.r, this.r * 2);
  };

  this.evaporate = function() {
    this.toDelete = true;
  };

  this.hits = function(jelly) {
    var d = dist(this.x, this.y, jelly.x, jelly.y);
    if (d < this.r + jelly.d) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function() {
    this.y = this.y - 5;
  };
}
