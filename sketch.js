// code based upon tutorial
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0


var stars = [];
var blasts = [];
var jellies = [];

function preload() {
    song = loadSound('Mozart.mp3');
  }
  

function setup() {
    createCanvas(300, 400);
    song.play();
    song.setVolume(0.9);
    buttonL = createButton('Left');
    buttonL.mousePressed(goLeft);
    buttonShoot = createButton('Blast');
    buttonShoot.mousePressed(blastBtn);
    buttonRight = createButton('Right');
    buttonRight.mousePressed(goRight);
    ship = new Ship();
    volobj = new Volumeobj();
  }
  
  

  function draw() {
    background(0);
    volobj.updatevol();
    var vol = volobj.vol;
    var diam = map(vol, 0, 0.9, 10, 250);
    if (volobj.createbaddie){
        var jelly = new Jelly(floor(random(width)),0);
        jellies.push(jelly);
        volobj.createbaddie = false;
    }


    if(floor(random(7)) === 1){
        var star = new Star(floor(random(width)), 0,floor(random(3)));
        stars.push(star);
        odd = false;
    }
    
  for (var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].move();
    if (stars[i].unseen()) {
        stars[i].vaporize();
      }
    }

    for (var i = stars.length - 1; i >= 0; i--) {
        if (stars[i].toDelete) {
          stars.splice(i, 1);
        }
      }

      for (var i = 0; i < blasts.length; i++) {
        blasts[i].show();
        blasts[i].move();

        for (var j = 0; j < jellies.length; j++) {
            if (blasts[i].hits(jellies[j])) {
              jellies[j].explode();
              blasts[i].evaporate();
            }
          }
        
        }

        for (var i = 0; i < jellies.length; i++) {
            jellies[i].grow(diam);
            jellies[i].move();
            jellies[i].show();

            if (jellies[i].unseen()) {
                jellies[i].vaporize();
            }
            if(!jellies[i].hit){
                if(ship.hits(jellies[i])){
                    ship.damage()
            }
            
            }
        }

        for (var i = jellies.length - 1; i >= 0; i--) {
            if (jellies[i].toDelete) {
              jellies.splice(i, 1);
            }
          }

          for (var i = blasts.length - 1; i >= 0; i--) {
            if (blasts[i].toDelete) {
              blasts.splice(i, 1);
            }
          }


      ship.show();
      ship.move();  
  }

  

  function goLeft() {

    ship.setDir(-1);
  }

  function goRight() {
    ship.setDir(1);
  }

  function blastBtn() {

    if(!ship.hit){
    var blast = new Blast(ship.x, (height - 35));
    blasts.push(blast);
  }
  }
  function keyReleased() {
    if (key != ' ') {
      ship.setDir(0);
    }
  }
  
  function keyPressed() {
    if (key === ' ') {

        if(!ship.hit){

        var blast = new Blast(ship.x, (height - 35));
        blasts.push(blast);
        }
      
    
    }
  
    if (keyCode === RIGHT_ARROW) {
      ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
      ship.setDir(-1);
    }
  }
  

  