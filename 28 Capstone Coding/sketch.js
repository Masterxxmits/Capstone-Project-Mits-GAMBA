// GAMBA Casino
// Mitsaal Idris
// TBD

let logo; 
let bJLogo;
let rLogo;
let sLogo;
let logoY = 0;

function preload(){
  logo = loadImage('assets/GAMBA LOGO (1).png');
  bJLogo = loadImage('assets/BLACKJACK LOGO.png');
  rLogo = loadImage('assets/ROULETTE LOGO.png');
  sLogo = loadImage('assets/SLOTS LOGO.png');
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
  image(rLogo, width/2.4, height/1.8, 370, 300);
  image(sLogo, width/1.4, height/3, 400, 300);
  if(mouseX > 320 && mouseX < 395){

  }
}

function mousePressed() {
  // click detection
  if((mouseX > 320 && mouseX < 395) && (mouseY > 369 && mouseY < 481)){
    console.log(mouseX, mouseY);
  }
  if((mouseX > 750 && mouseX < 905) && (mouseY > 560 && mouseY < 705)){
    console.log(mouseX, mouseY);
  }
  if((mouseX > 1190 && mouseX < 1390) && (mouseY > 365 && mouseY < 500)){
    console.log(mouseX, mouseY);
  }
}