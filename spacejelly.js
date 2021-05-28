
function Jelly(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(0.5,1);
  this.hit = false;
  this.hitcount = 0;


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

  this.grow = function(d) {
      if(!this.hit){
        this.d = this.r * d;
      }
      else{
          this.d += d;
          if(this.d >= 0.8 * width){
              this.toDelete = true;
          }
      }
    
  };

  
  this.explode = function() {
    this.hitcount += 1;
    if(this.hitcount >= 2){
        this.hit = true;
    }
    
  };

  
  this.move = function() {
    this.y = this.y + 3;
  };

  this.show = function() {
    noStroke();

    if(this.hit){

        fill(231,125,125);
    }
    else{

        if(floor(random(6)) === 1){
            fill(0, 255, 0);
        }
        else{
            fill(102, 255, 102);
        }

    }
    

    ellipse(this.x, this.y, this.d, this.d);
  };
}
