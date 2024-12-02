// GAMBA Casino
// Mitsaal Idris
// TBD

let logo; 
let bJLogo;
let logoY = 0;

function preload(){
  logo = loadImage('assets/GAMBA LOGO (1).png');
  bJLogo = loadImage('assets/BLACKJACK LOGO.png');
}

function setup() {
  logoY = height/15;
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
  
  // imageMode(CENTER);
}

function redBackGround(){
  background(220+sin(frameCount/20)*30, 0,0);
  stroke(100, 190);
  for(let x = -width; x <width; x += 20){
    line(x, 0, x+800, height);
  }
}

function draw() {
  // background(255, 50, 5);
  redBackGround();
  image(logo, width/2.4, logoY+sin(frameCount/20)* 30, 400, 330);
  image(bJLogo, width/10, height/3, 400, 300);
  
}


