function Volumeobj () {
    this.volhistory = [];
    this.firstSet = true;
    this.start = Date.now();
    this.amp = new p5.Amplitude();
    this.createbaddie = false;
    this.vol = 0.0;

this.updatevol = function() {

    this.vol = this.amp.getLevel();
    this.volhistory.push(this.vol);

    if(this.volhistory.length > 12){
        this.tenstep = this.volhistory[this.volhistory.length - 10];
        this.delta = this.vol - this.tenstep;

        if(this.delta > 0.005){

            if(Date.now() - this.start > 300){
                this.start = Date.now();
                this.createbaddie = true;
                console.log("create baddie");
            }
            else{
                this.createbaddie = false;
        }
        }
    }
    if (this.volhistory.length > width - 50) {
        this.volhistory.splice(0, 1);
      }
  
};
}

  
