// GAMBA Casino
// Mitsaal Idris
// TBD

// let sequence = [];
// let stepAmount = 1;
// let currentValue = 0;
// let largest = 0;
// let scaleAmount = 0;
// let arcList = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

// function draw() {
//   if(largest < 5000){
//     //background(151, 42, 39);
//     //translate(0, height/6);
//     addToSequence(height/2);
//     addToSequence(height/6);
//     addToSequence(height*5/6);
//     addToSequence(height/1.5);
//     addToSequence(height/3);
//     scaleAmount = lerp(scaleAmount, width/largest);
//     //scale(scaleAmount);
//     renderArcs();
//   }
  
// }

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