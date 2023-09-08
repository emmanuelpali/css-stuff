const canvas = document.querySelector('.myCanvas');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");


ctx.fillStyle = "rgb(0,0,0,)";
 ctx.fillRect(0,0, width, height);
 ctx.translate(width / 2, height / 2);
// ctx.fillStyle = "rgba(255, 30, 0,0.5)";
// ctx.fillRect(150, 150, 300, 150);

// ctx.fillStyle = "rgb(255, 155, 60)";
// ctx.fillRect((width/2), (height/2), 100, 100);
// ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
// ctx.fillRect(25, 100, 175, 50);
// ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.lineWidth = 5;
// ctx.strokeRect((width/2), (height/2), 175, 200);

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.beginPath();
// ctx.arc((width/2), (height/2), 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

//   ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas text", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas text", 50, 150);

// canvas.setAttribute("aria-label", "Canvas text");



function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 253;
let moveOffset = 10;

for (let i = 0; i < length; i++) {
  ctx.fillStyle = `rgba(${255 - rand(250,60)},0,${255 - length},0.5)`;
ctx.beginPath();
ctx.moveTo(moveOffset, moveOffset);
ctx.lineTo(moveOffset + length, moveOffset);
ctx.arc(0, 106, 50, degToRad(0), degToRad(360), true);
//const triHeight = (length / 2) * Math.tan(degToRad(60));
ctx.lineTo(moveOffset + length / 2, length);
ctx.lineTo(moveOffset, length - 10);
ctx.fill();

length--;
moveOffset += 0.7;
ctx.rotate(degToRad(5));
}


function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0,0, width, height);


  for (const ball of balls) {
    
  }
}
