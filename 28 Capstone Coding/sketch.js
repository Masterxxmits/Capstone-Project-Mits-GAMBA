// GAMBA Casino
// Mitsaal Idris
// TBD

// INSTRUCTIONS
// Click on Slots to begin gambling
//BLACKJACK AND ROULETTE ARE UNDER CONSTRUCTION
// Press space to start gambling!

//my let variables
let logo;
let bJLogo;
let rLogo;
let sLogo;
let slotSeven;
let slotBar;
let slotCherry;
let slotLemon;
let slotOrange;
let slotGrape;
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
let slotsY;
let pMoney = 10000;
let slotsGamble = 1000;
let currentFrame;
let secondFrame;
let btLanes = 4000;
let dLanes = 2000;
let mLane = 7000;
let win =0;
let slotsEnd;
let mainMusic;
let slotsMusic;
let spinning;
let winSound;
let loseSound;
let soundStart =1;

//preloads the sound and images
function preload() {
  soundFormats('mp3','wav');
  logo = loadImage('assets/GAMBA LOGO (1).png');
  bJLogo = loadImage('assets/BLACKJACK LOGO.png');
  rLogo = loadImage('assets/ROULETTE LOGO.png');
  sLogo = loadImage('assets/SLOTS LOGO.png');
  slotSeven = loadImage('assets/SLOT 7.png');
  slotBar = loadImage('assets/SLOT BAR.png');
  slotCherry = loadImage('assets/SLOT CHERRY.png');
  slotLemon = loadImage('assets/SLOT LEM.png');
  slotOrange = loadImage('assets/SLOT ORG.png');
  slotGrape = loadImage('assets/SLOTS PLUM.png');
  mainMusic = loadSound('assets/jazz-music-whiskey-bar-restaurant-casino-background-intro-theme-263181.mp3');
  slotsMusic = loadSound('assets/31231248_poker_by_gentlejammers_preview.mp3');
  //spinning = loadSound('assets/casino_slot_machine_musical_wheels_spinning_arpeggio_seamless_looping_7_wav.mp3');
  winSound = loadSound('assets/preview.mp3');
  loseSound = loadSound('assets/mixkit-losing-bleeps-2026.wav');
}

//size of images
function setup() {
  createCanvas(windowWidth, windowHeight);
  topLayer = createGraphics(800, 750);
  imageMode(CENTER);
  logoY = height / 5.5;
  bJY = height / 2.1;
  rY = height / 1.4;
  sY = height / 2.3;
  mySlotGame = new SlotGame();
  stroke(255);
  noFill();


  // imageMode(CENTER);
}

//the main menu background
function redBackGround() {
  background(220 + sin(frameCount / 20) * 30, 0, 0);
  stroke(100, 190);
  for (let x = -width; x < width; x += 20) {
    line(x, 0, x + 800, height);
  }
}

//Hover effect for each icon in the menu
function draw() {
  if(soundStart === 1){
    mainMusic.loop();
    soundStart = 0;

  }


  if ((mouseX > width / 5 - 115 && mouseX < width / 5) && (mouseY > bJY - 125 && mouseY < bJY + 55)) {
    bJHover = true;
    bJY = max(bJY - 3, height / 2.1 - 50);
  }
  else {
    bJHover = false;
    bJY = min(bJY + 3, height / 2.1);
  }
  if ((mouseX > width * 0.45 && mouseX < width * 0.55) && (mouseY > rY - 125 && mouseY < rY + 55)) {
    rHover = true;
    rY = max(rY - 3, height / 1.4 - 50);
  }
  else {
    rHover = false;
    rY = min(rY + 3, height / 1.4);
  }
  if ((mouseX > width * 0.76 && mouseX < width * 0.91) && (mouseY > sY - 125 && mouseY < sY + 55)) {
    sHover = true;
    sY = max(sY - 3, height / 2.3 - 50);
  }
  else {
    sHover = false;
    sY = min(sY + 3, height / 2.3);
  }
  redBackGround();
  moneySystem();
  image(logo, width / 1.99, logoY + sin(frameCount / 20) * 30, 400, 330);
  image(bJLogo, width / 6, bJY, 400, 300);
  image(rLogo, width / 2, rY, 370, 300);
  image(sLogo, width / 1.2, sY, 400, 300);
  // fill(0)
  // rect(width*0.45, rY-125, width*0.1, 180)

  //Code to load the slots game
  if (slotsA === 1) {
    if(soundStart === 0){
      mainMusic.stop();
      slotsMusic.loop();
      soundStart = 1;
      
    }
    soundStart = 2;
    
    stroke(0);
    background(237 + sin(frameCount / 20) * 30, 205 + sin(frameCount / 20) * 30, 98 + sin(frameCount / 20) * 30);
    for (let x = -width; x < width; x += 20) {
      line(x, 0, x + 800, height);
    }
    moneySystem();
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(width / 2, height / 2, 250, 750);
    rect(width / 2.8, height / 2, 250, 750);
    rect(width / 1.55, height / 2, 250, 750);
    topLayer.clear();
    mySlotGame.display();

    image(topLayer, width / 2, height / 2, 800, 750);
    mySlotGame.checkLine();
    increaseBet();
    decreaseBet();

    // if (mouse)

  }

  // code for both blackjack and roulette UNDER CONSTRUCTION
  if (blackJackA === 1) {
    stroke(0);
    background(53 + sin(frameCount / 20) * 30, 101 + sin(frameCount / 20) * 30, 77 + sin(frameCount / 20) * 30);
    for (let x = -width; x < width; x += 20) {
      line(x, 0, x + 800, height);
    }
  }
  if (rouletteA === 1) {
    stroke(0);
    background(145 + sin(frameCount / 20) * 30, 193 + sin(frameCount / 20) * 30, 214 + sin(frameCount / 20) * 30);
    for (let x = -width; x < width; x += 20) {
      line(x, 0, x + 800, height);
    }
    angleMode(DEGREES);
    stroke(0);
    rTable();
    fill(25, 25, 100);
    circle(0, 0, 550);
    // noFill();
    // circle(0,0, 600);
    angleMode(RADIANS);
  }
}

//calls to stop the lanes
function keyPressed() {
  if (slotsA === 1 && keyIsDown(32)) {

    mySlotGame.stopLane();
  }
}

//INCREASE BET AND DECREASE BET DO NOT WORK AT THE MOMENT
function increaseBet(){
  if(keyPressed === UP_ARROW){
    slotsGamble += 100;
    btLanes *= 1.1;
    dLanes *= 1.1;
    mLane *= 1.1;
  }
}
function decreaseBet(){
  if(keyPressed === DOWN_ARROW){
    slotsGamble -= 100;
    btLanes *= 0.9;
    dLanes *= 0.9;
    mLane *= 0.9;
  }
}

function mousePressed() {
  // click detection
  if ((mouseX > width / 5 - 115 && mouseX < width / 5) && (mouseY > bJY - 125 && mouseY < bJY + 55)) {
    
    // if (mouseIsPressed) {
    //   blackJackA = 1;
    // }
  }
  if ((mouseX > width * 0.45 && mouseX < width * 0.55) && (mouseY > rY - 125 && mouseY < rY + 55)) {
    console.log(mouseX, mouseY);
    // if (mouseIsPressed) {
    //   rouletteA = 1;
    // }
  }
  if ((mouseX > width * 0.76 && mouseX < width * 0.91) && (mouseY > sY - 125 && mouseY < sY + 55)) {
    if (mouseIsPressed) {
      slotsA = 1;
    }
  }
}

//roulette table code 
function rTable() {
  let nums = ['18', '6', '21', '33', '16', '4', '23', '35', '14', '2', '0', '28', '9', '26', '30', '11', '7', '20', '32', '17', '5', '22', '34', '15', '3', '24', '36', '13', '1', '00', '27', '10', '25', '29', '12', '8', '19', '31'];
  push();
  translate(400, 500);
  rotate(frameCount * 5);
  circle(0, 0, 750);
  let red = true;
  let i = 0;

  for (let a = 0; a <= 360; a += 360 / 38) {

    if (red) {
      fill(255, 0, 0, 150);

    }
    else {
      fill(0, 0, 0, 150);
    }
    red = !red;
    arc(0, 0, 750, 750, (a), (a + 360 / 38));
    push();
    rotate(a);//(a*360/38);
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text(nums[i], -10, -350);
    pop();
    i++;
  }
  fill(0, 255, 0, 150);
  arc(0, 0, 750, 750, (0), (360 / 38));
  fill(0, 255, 0, 150);
  arc(0, 0, 750, 750, (180), (180 + 360 / 38));

}

// the money system for the player
function moneySystem() {
  stroke(255);
  textSize(15);
  text('MONEY: ' + pMoney, width - 120, height - 900);
  if(pMoney <= 0){
    stroke(0);
    textSize(50);
    text('YOU ARE BANKRUPT, TRY AGAIN?', windowWidth/3.5, height - 35);
  }
  if(pMoney >= 50000){
    stroke(0);
    textSize(50);
    text('GET OUT OF MY CASINO!', windowWidth/3.5, height - 850);
    slotsA = 0;
  }
}

// ENTIRE CODE FOR SLOTS
class SlotGame {
  constructor() {
    // this.winnings = new Map([
    //   ["7",7000],
    //   ["Cherry",500],
    //   ["Lemon",500],
    //   ["Grape",500],
    //   ["Bar",2000],
    //   ["Orange",500]
    // ]);
    this.value = 0;
    this.col1 = [];
    this.col2 = [];
    this.col3 = [];
    this.col1.push(new SlotTile(0, -750, "7"));
    this.col1.push(new SlotTile(0, -500, "Cherry"));
    this.col1.push(new SlotTile(0, -250, "Lemon"));
    this.col1.push(new SlotTile(0, 0, "Grape"));
    this.col1.push(new SlotTile(0, 250, "Bar"));
    this.col1.push(new SlotTile(0, 500, "Orange"));
    this.col2.push(new SlotTile(275, -750, "Lemon"));
    this.col2.push(new SlotTile(275, -500, "7"));
    this.col2.push(new SlotTile(275, -250, "Grape"));
    this.col2.push(new SlotTile(275, 0, "Bar"));
    this.col2.push(new SlotTile(275, 250, "Orange"));
    this.col2.push(new SlotTile(275, 500, "Cherry"));
    this.col3.push(new SlotTile(555, -750, "Cherry"));
    this.col3.push(new SlotTile(555, -500, "7"));
    this.col3.push(new SlotTile(555, -250, "Orange"));
    this.col3.push(new SlotTile(555, 0, "Bar"));
    this.col3.push(new SlotTile(555, 250, "Grape"));
    this.col3.push(new SlotTile(555, 500, "Lemon"));
  }

  // checks if lines are the same
  checkLine() {

  // middle line
    let col1Value =1 ;
    for (let t of this.col1) {
      if (t.y === 250){
        col1Value =t.value;
      }
    }

    let col2Value;
    for (let t of this.col2) {
      if (t.y === 250){
        col2Value =t.value;
      }
    }
    let col3Value;
    for (let t of this.col3) {
      if (t.y === 250){
        col3Value =t.value;
      }
    }
    print(col1Value, col2Value, col3Value);
    if (col1Value === col2Value && col2Value === col3Value){
      if(this.value === 3){
        print("funny");
        pMoney += (mLane);
        this.value = 4;
      }
      if(win ===0){
        stroke(0);
        textSize(50);
        text('YOU WIN: '+ mLane, windowWidth/3.5, height - 35);

      }
    } 

    // else if (col1Value !== col2Value && col2Value !== col3Value){
    //   if(this.value === 3){
    //     print("funny");
    //     pMoney -=  slotsGamble;
      
    //     this.value = 4;
    //   }
    // }
    // else if (col1Value === col2Value && col2Value !== col3Value){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;

    //     pMoney -= slotsGamble;
    //   }
    // }
    // else if (col1Value !== col2Value && col2Value === col3Value){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;
    //     pMoney -=  slotsGamble;
    //   }
    // }
      
    // bottom line
    let col1ValueB =1 ;
    for (let t of this.col1) {
      if (t.y === 500){
        col1ValueB =t.value;
      }
    }

    let col2ValueB;
    for (let t of this.col2) {
      if (t.y === 500){
        col2ValueB =t.value;
      }
    }
    let col3ValueB;
    for (let t of this.col3) {
      if (t.y === 500){
        col3ValueB =t.value;
      }
    }
   
    print(col1ValueB, col2ValueB, col3ValueB);
    if (col1ValueB === col2ValueB && col2ValueB === col3ValueB){
      print("MATCH");
      if(this.value === 3){
        print("funny");
        pMoney += (btLanes);
        this.value = 4;
      }
      if(win ===0){
        stroke(0);
        textSize(50);
        text('YOU WIN: '+ btLanes, windowWidth/3.5, height - 35);
        
      }
    }

    // else if (col1ValueB !== col2ValueB && col2ValueB !== col3ValueB){
    //   if(this.value === 3){
    //     print("funny");
    //     pMoney -=  slotsGamble;
      
    //     this.value = 4;
    //   }
    // }
    // else if (col1ValueB === col2ValueB && col2ValueB !== col3ValueB){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;

    //     pMoney -= slotsGamble;
    //   }
    // }
    // else if (col1ValueB !== col2ValueB && col2ValueB === col3ValueB){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;
    //     pMoney -=  slotsGamble;
    //   }
    // }

      
    // top line
    let col1ValueT =1 ;
    for (let t of this.col1) {
      if (t.y === 0){
        col1ValueT =t.value;
      }
    }

    let col2ValueT;
    for (let t of this.col2) {
      if (t.y === 0){
        col2ValueT =t.value;
      }
    }
    let col3ValueT;
    for (let t of this.col3) {
      if (t.y === 0){
        col3ValueT =t.value;
      }
    }

    print(col1ValueT, col2ValueT, col3ValueT);
    if (col1ValueT === col2ValueT && col2ValueT === col3ValueT){
      if(this.value === 3){
        print("funny");
        pMoney += (btLanes);
        this.value = 4;
      }
      if(win ===0){
        stroke(0);
        textSize(50);
        text('YOU WIN: '+ btLanes, windowWidth/3.5, height - 35);
        
      }
    }
    
    //diagonal line
    let col1ValueD =1 ;
    for (let t of this.col1) {
      if (t.y === 0){
        col1ValueD =t.value;
      }
    }

    let col2ValueD;
    for (let t of this.col2) {
      if (t.y === 250){
        col2ValueD =t.value;
      }
    }
    let col3ValueD;
    for (let t of this.col3) {
      if (t.y === 500){
        col3ValueD =t.value;
      }
    }
    print(col1ValueD, col2ValueD, col3ValueD);
    if (col1ValueD === col2ValueD && col2ValueD === col3ValueD){
      if(this.value === 3){
        print("funny");
        pMoney += (dLanes);
        this.value = 4;
      }
      if(win ===0){
        stroke(0);
        textSize(50);
        text('YOU WIN: '+ dLanes, windowWidth/3.5, height - 35);
       
      }
    }

    // the other diagonal line
    let col1ValueD1 =1 ;
    for (let t of this.col1) {
      if (t.y === 500){
        col1ValueD1 =t.value;
      }
    }

    let col2ValueD1;
    for (let t of this.col2) {
      if (t.y === 250){
        col2ValueD1 =t.value;
      }
    }
    let col3ValueD1;
    for (let t of this.col3) {
      if (t.y === 0){
        col3ValueD1 =t.value;
      }
    }
    print(col1ValueD1, col2ValueD1, col3ValueD1);
    if (col1ValueD1 === col2ValueD1 && col2ValueD1 === col3ValueD1){
      if(this.value === 3){
        print("funny");
        pMoney += (dLanes);

        this.value = 4;
      }
      if(win ===0){
        stroke(0);
        textSize(50);
        text('YOU WIN: '+ dLanes, windowWidth/3.5, height - 35);
       
      }
    }

    // no wins, lose money
    if(this.value === 3){
      pMoney -= slotsGamble;
      this.value = 4;
    }

    // else if (col1ValueT !== col2ValueT && col2ValueT !== col3ValueT){
    //   if(this.value === 3){
    //     print("funny");
    //     pMoney -=  slotsGamble;
      
    //     this.value = 4;
    //   }
    // }
    // else if (col1ValueT === col2ValueT && col2ValueT !== col3ValueT){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;

    //     pMoney -= slotsGamble;
    //   }
    // }
    // else if (col1ValueT !== col2ValueT && col2ValueT === col3ValueT){
    //   if(this.value === 3){
    //     print("funny");
    //     this.value = 4;
    //     pMoney -=  slotsGamble;
    //   }
    // }
    // if (col1Value)

    // if (this.col1[3] === this.col1[3] === this.col1[3]) {
    //   pMoney += 100;
    // }
    // if(this.col1==="7" (height >= 250 && height <= 500 ) === this.col2==="7" (height >= 250 && height <= 500) === this.col3==="7" (height >= 250 && height <= 500)){
    //   pMoney+=100; 
    // }
  }

  // code for stopping the lanes
  stopLane() {
    this.value += 1;
    if (this.value === 1) {
      print("snap1");
      for (let s of this.col1) {
        s.gridSnap();
      }
    }
    if (this.value === 2) {
      print("snap2");
      for (let s of this.col2) {
        s.gridSnap();
      }
    }
    if (this.value === 3) {
      print("snaprhombus");
      for (let s of this.col3) {
        s.gridSnap();
      }
    }
    if( this.value >4){
      if(pMoney === 0){
        pMoney += 10000;
      }
      this.value = 0;
    }
    
  }

  //spinning/scolling icons
  display() {

    for (let s of this.col1) {
      if (this.value === 0) {
        s.update();
      }
      s.display();
    }
    for (let s of this.col2) {
      if (this.value < 2) {
        s.update();
      }
      s.display();
    }
    for (let s of this.col3) {
      if (this.value < 3) {
        s.update();
      }
      s.display();
    }
  }
}

// code for Icons
class SlotTile {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.speed = 69;
  }
  display() {
    if (this.value === "7") {
      topLayer.image(slotSeven, this.x, this.y);
    }
    if (this.value === "Bar") {
      topLayer.image(slotBar, this.x, this.y);
    }
    if (this.value === "Cherry") {
      topLayer.image(slotCherry, this.x, this.y);
    }
    if (this.value === "Lemon") {
      topLayer.image(slotLemon, this.x, this.y);
    }
    if (this.value === "Orange") {
      topLayer.image(slotOrange, this.x, this.y);
    }
    if (this.value === "Grape") {
      topLayer.image(slotGrape, this.x, this.y);
    }
  }

  //Wrap around
  update() {
    this.y += this.speed;
    if (this.y >= 750) {
      this.y -= 1500;
    }
    slotsY = this.y;
  }
  //snap to each lane
  gridSnap() {
    while (this.y % 250 !== 0) {
      this.y++;
    }
    if (this.y >= 750) {
      this.y -= 1500;
    }

  }

}