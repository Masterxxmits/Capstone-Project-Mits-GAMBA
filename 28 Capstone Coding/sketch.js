// GAMBA Casino
// Mitsaal Idris
// TBD

let logo; 
let bJLogo;
let rLogo;
let sLogo;
let slotSeven;
let slotBar;
let slotCherry;
let slotLemon;
let slotOrange;
let mySlotGame;
let logoY = 0;
let bJHover = false;
let rHover = false;
let sHover = false;
let bJY;
let rY;
let sY;
let slotsA = 0;
let blackJackA = 0;
let rouletteA = 0;
let topLayer;

function preload(){
  logo = loadImage('assets/GAMBA LOGO (1).png');
  bJLogo = loadImage('assets/BLACKJACK LOGO.png');
  rLogo = loadImage('assets/ROULETTE LOGO.png');
  sLogo = loadImage('assets/SLOTS LOGO.png');
  slotSeven = loadImage('assets/SLOT 7.png');
  slotBar = loadImage('assets/SLOT BAR.png');
  slotCherry = loadImage('assets/SLOT CHERRY.png');
  slotLemon = loadImage('assets/SLOT LEM.png');
  slotOrange = loadImage('assets/SLOT ORG.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  topLayer = createGraphics(800,750);
  imageMode(CENTER);
  logoY = height/5.5;
  bJY = height/2.1;
  rY = height/1.4;
  sY = height/2.3;
  mySlotGame = new SlotGame();
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
  if((mouseX > width/5-115 && mouseX < width/5) && (mouseY > bJY-125 && mouseY < bJY+55)){
    bJHover = true;
    bJY = max(bJY - 3, height/2.1 - 50);
  }
  else{
    bJHover = false;
    bJY = min(bJY + 3, height/2.1);
  }
  if((mouseX > width*0.45 && mouseX < width*0.55) && (mouseY > rY-125 && mouseY < rY+55)){
    rHover = true;
    rY = max(rY - 3, height/1.4 - 50);
  }
  else{
    rHover = false;
    rY = min(rY + 3, height/1.4);
  }
  if((mouseX > width*0.76 && mouseX < width*0.91) && (mouseY > sY-125 && mouseY < sY+55)){
    sHover = true;
    sY = max(sY - 3, height/2.3 - 50);
  }
  else{
    sHover = false;
    sY = min(sY + 3, height/2.3);
  }
  redBackGround();
  image(logo, width/1.99, logoY+sin(frameCount/20)* 30, 400, 330);
  image(bJLogo, width/6, bJY, 400, 300);
  image(rLogo, width/2, rY, 370, 300);
  image(sLogo, width/1.2, sY, 400, 300);
  // fill(0)
  // rect(width*0.45, rY-125, width*0.1, 180)
  if(slotsA === 1){
    background(237+sin(frameCount/20)*30, 205+sin(frameCount/20)*30,98+sin(frameCount/20)*30);
    for(let x = -width; x <width; x += 20){
      line(x, 0, x+800, height);
    }
    
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/2, 250, 750);
    rect(width/2.8, height/2, 250, 750);
    rect(width/1.55, height/2, 250, 750);
    topLayer.clear();
    mySlotGame.display();
    image(topLayer, width/2, height/2, 800, 750);
  }
  if(blackJackA === 1){
    background(53+sin(frameCount/20)*30, 101+sin(frameCount/20)*30,77+sin(frameCount/20)*30);
    for(let x = -width; x <width; x += 20){
      line(x, 0, x+800, height);
    }
  }
  if(rouletteA === 1){
    background(145+sin(frameCount/20)*30, 193+sin(frameCount/20)*30,214+sin(frameCount/20)*30);
    for(let x = -width; x <width; x += 20){
      line(x, 0, x+800, height);
    }
  }
}

function mousePressed() {
  // click detection
  if((mouseX > width/5-115 && mouseX < width/5) && (mouseY > bJY-125 && mouseY < bJY+55)){
    if(mouseIsPressed){
      blackJackA = 1;
    }
  }
  if((mouseX > width*0.45 && mouseX < width*0.55) && (mouseY > rY-125 && mouseY < rY+55)){
    console.log(mouseX, mouseY);
    if(mouseIsPressed){
      rouletteA = 1;
    }
  }
  if((mouseX > width*0.76 && mouseX < width*0.91) && (mouseY > sY-125 && mouseY < sY+55)){
    if(mouseIsPressed){
      slotsA = 1;
    }
  }
}

class SlotGame{
  constructor(){
    this.col1 = [];
    this.col2 = [];
    this.col3 = [];
    this.col1.push(new SlotTile(0,-500,"7"));
    this.col1.push(new SlotTile(0,-250,"Cherry"));
    this.col1.push(new SlotTile(0,0,"Lemon"));
    this.col1.push(new SlotTile(0,250,"Bar"));
    this.col1.push(new SlotTile(0,500,"Orange"));
    this.col2.push(new SlotTile(275,-500,"Cherry"));
    this.col2.push(new SlotTile(275,-250,"Lemon"));
    this.col2.push(new SlotTile(275,0,"Bar"));
    this.col2.push(new SlotTile(275,250,"Orange"));
    this.col2.push(new SlotTile(275,500,"7"));
    this.col3.push(new SlotTile(555,-500,"Lemon"));
    this.col3.push(new SlotTile(555,-250,"Bar"));
    this.col3.push(new SlotTile(555,0,"Orange"));
    this.col3.push(new SlotTile(555,250,"7"));
    this.col3.push(new SlotTile(555,500,"Cherry"));
  }
  display(){
    for(let s of this.col1){
      s.display();
      s.update();
    }
    for( let s of this.col2){
      s.display();
      s.update();
    }
    for(let s of this.col3){
      s.display();
      s.update();
    }
  }
}

class SlotTile{
  constructor(x, y, value){
    this.x = x;
    this.y = y;
    this.value = value;
    this.speed = 66;
  }
  display(){
    if (this.value === "7"){
      topLayer.image(slotSeven,this.x, this.y);
    }
    if (this.value === "Bar"){
      topLayer.image(slotBar, this.x, this.y);
    }
    if (this.value === "Cherry"){
      topLayer.image(slotCherry, this.x, this.y);
    }
    if (this.value === "Lemon"){
      topLayer.image(slotLemon, this.x, this.y);
    }
    if (this.value === "Orange"){
      topLayer.image(slotOrange, this.x, this.y);
    }
  }
  update(){
    this.y += this.speed;
    if(this.y >= 750){
      this.y -= 1250;
    }
  }
}