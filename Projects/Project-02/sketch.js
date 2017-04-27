

var song;
var amp;
var button;


var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('starboy.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  button = createButton('Play/Pause');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();

}

function draw() {
  background(0);
  
  var vol = amp.getLevel();
  volhistory.push(vol);
  noStroke();
  fill(random(255),random(255),random(255));

  strokeWeight(random);
  noCursor();

  translate(mouseX, mouseY);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, random(10), random(100), random(1000));
    //var x = r * tan(i^(random));
    var x = r * sin(i^(random));
    var y = r - cos(i^(random));
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
}
