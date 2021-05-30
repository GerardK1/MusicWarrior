// code based upon tutorial
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0


var stars = [];
var blasts = [];
var jellies = [];
var start = false;
var score = 0;
var musicbool = true;
var vol = 0;

function preload() {
    song = loadSound('Mozart.mp3');
  }
  

function setup() {
    let cnv = createCanvas(300, 400);
    cnv.mousePressed(canvasPressed);
    buttonL = createButton('___LEFT___');
    buttonL.mousePressed(goLeft);
    buttonShoot = createButton('___BLAST!___');
    buttonShoot.mousePressed(blastBtn);
    buttonRight = createButton('___RIGHT___');
    buttonRight.mousePressed(goRight);
    ship = new Ship();
    volobj = new Volumeobj();
  }
  
  function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    if(!start){
        song.setVolume(0.6);
        song.play();
        start = true;
    }
  }
  

  function draw() {
    background(0);

    fill(255);
    text(score, 280, 10);
    if(musicbool){
        volobj.updatevol();
        vol = volobj.vol;
        musicbool = false;
    }
      else{
          musicbool = true;
      }
      
    var diam = map(vol, 0, 0.6, 10, 250);
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
            if (!jellies[j].hit){
            if (blasts[i].hits(jellies[j])) {
              jellies[j].explode();
              blasts[i].evaporate();
              if (jellies[j].hit){
                  score += 1;
              }
            }
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

    ship.setDir(0);
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
  

  
