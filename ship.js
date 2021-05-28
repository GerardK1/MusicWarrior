// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Ship() {
  this.x = width / 2;
  this.xdir = 0;
  this.left = false;
  this.right = false;
  this.hit = false;
  this.start = Date.now();

  this.show = function() {
    
    if(!this.hit){
    
    if(this.left){
        fill(180);
        triangle(this.x - 8, height - 15, this.x, height - 35, this.x + 8, height - 15);
        if(floor(random(3)) === 1){
            fill(255, 102, 0);
        }
        else{
            fill(254,0,0);
        }
        triangle(this.x - 8, height - 15, this.x - 4, height - 8, this.x, height - 15);
        triangle(this.x, height - 15, this.x + 4, height - 5, this.x + 8, height - 15);
    }
    else if(this.right){
        fill(180);
        triangle(this.x - 8, height - 15, this.x, height - 35, this.x + 8, height - 15);
        if(floor(random(3)) === 1){
            fill(255, 102, 0);
        }
        else{
            fill(254,0,0);
        }
        triangle(this.x - 8, height - 15, this.x - 4, height - 5, this.x, height - 15);
        triangle(this.x, height - 15, this.x + 4, height - 8, this.x + 8, height - 15);
    }
    else{
        fill(180);
        triangle(this.x - 10, height - 15, this.x, height - 35, this.x + 10, height - 15);
        if(floor(random(3)) === 1){
            fill(255, 102, 0);
        }
        else{
            fill(254,0,0);
        }
        triangle(this.x - 10, height - 15, this.x - 5, height - 5, this.x, height - 15);
        triangle(this.x, height - 15, this.x + 5, height - 5, this.x + 10, height - 15);
    }
    }
    else{
        if(floor(random(3)) === 1){
            fill(255, 102, 0);
        }
        else{
            fill(254,0,0);
        }
        triangle(this.x - 8, height - 15, this.x, height - 35, this.x + 8, height - 15);
        triangle(this.x - 8, height - 15, this.x - 4, height - 8, this.x, height - 15);
        triangle(this.x, height - 15, this.x + 4, height - 5, this.x + 8, height - 15);

        if(Date.now() - this.start > 1000){
            this.hit = false;
        }


    }

  };

  this.hits = function(jelly) {
    var d = dist(this.x, height - 35, jelly.x, jelly.y);

    if (d < jelly.d) {
      return true;
    } else {
      return false;
    }
  };

  this.damage = function(){
    if(!this.hit){
        this.hit = true;
        this.start = Date.now();

    }
    
  };

  this.setDir = function(dir) {

    if(this.xdir + dir == 0)
    {
        this.xdir = 0;
    }

    else{
        this.xdir = dir;
    }
    
  };

  this.move = function(dir) {
   
    if(!this.hit){

    if (this.x > 10 && Math.sign(this.xdir)===-1){
        
        this.x += this.xdir * 3;
        this.left = true;
        this.right = false;
    }
    else if (this.x < width -10 && Math.sign(this.xdir)===1){
        
        this.x += this.xdir * 3;
        this.right = true;
        this.left = false;
    }
    else{
        this.left = false;
        this.right = false;
    }
}
    
  };
}
