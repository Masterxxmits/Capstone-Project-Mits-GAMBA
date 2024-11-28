// GAMBA Casino
// Mitsaal Idris
// TBD

function preload(){
  (loadImage("assets/LOGO.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  function draw() {
    var ctx = (a canvas context);
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
}


// function addToSequence(y){
//   let backwards = currentValue - stepAmount;
//   if(backwards > 0 && !sequence.includes(backwards)){
//     arcList.push(new rArc(currentValue, backwards, sequence.length%2, y));
//     sequence.push(backwards);
//     currentValue = backwards;
//     stepAmount++;
//   }
//   else{
//     let forwards = currentValue + stepAmount;
//     arcList.push(new rArc(currentValue, forwards, sequence.length%2, y));
//     sequence.push(forwards);
//     currentValue = forwards;
//     stepAmount++;
//     if(currentValue > largest){
//       largest = currentValue;
//     }
    
//   }
  
// }

// function renderArcs(){
//   for(let r of arcList){
//     r.display();
//   }
// }


// class rArc{
//   constructor(start,end, direction, y){
//     this.y = y;
//     this.start = start;
//     this.end = end;
//     this.direction = direction;
//   }
//   display(){
//     let diameter = abs(this.start - this.end);
//     let x = (this.start + this.end)/2; //centerpoint
//     strokeWeight(0.5);
//     if(this.direction === 0){ //forward
//       arc(x, this.y, diameter, diameter, 0, PI);
//     }
//     else{
//       arc(x, this.y, diameter, diameter, PI, 0);
//     }
//   }
// }