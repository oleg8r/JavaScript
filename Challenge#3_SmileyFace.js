var SmileyFace = function(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
    fill(168, 124, 70);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function(message) {
    text(message, this.centerX, this.centerY);
};
        
var faceObj1 = new SmileyFace(80,80);
faceObj1.draw();
faceObj1.speak("Hello! I'm a smiley face!");

var faceObj2 = new SmileyFace(195,195);
faceObj2.draw();
faceObj2.speak("What's up?");

var faceObj3 = new SmileyFace(300,320);
faceObj3.draw();
faceObj3.speak("Let's have fun!");