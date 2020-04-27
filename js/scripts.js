let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 1000;

function draw() {
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(300,150);
  ctx.stroke();
}

draw();
