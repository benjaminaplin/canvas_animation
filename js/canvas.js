console.log('canvas linked!')

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();

var img1PosX = 50;
var img1PosY = 50;
var img3PosX = 150;
var img3PosY = 150;
var speed = 2;

function  animation1(){

  //img1 animate
  img1PosX -= speed;
  img1PosY -= speed;

  //img3 animate
  img3PosX += speed;
  img3PosY += speed;

  if (img1PosX == 0){
    speed = 0;
  }
}

function animation2(){
  //img1 animate
  img1PosY -= speed;

  //img3 animate
  img3PosY += speed;

  if (img1PosX == 200){
    speed = 0;
  }
}

function animation3(){
}


function animate(){
  var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

  requestAnimationFrame(animate);

  image1.src = 'http://riley.dev.kargo.com/code-test/test0.png'
  image2.src = 'http://riley.dev.kargo.com/code-test/test1.png'
  image3.src = 'http://riley.dev.kargo.com/code-test/test2.png'
  animation1();
  animation2();
  animation3();

  requestAnimationFrame(draw);
}

function draw(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = 300;
  ctx.canvas.height = 300;
  ctx.fillStyle = "#d3d3d3";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(image1,img1PosX,img1PosY ,100,100);
  ctx.drawImage(image2,100,100,100,100);
  ctx.drawImage(image3,img3PosX,img3PosY ,100,100);
  requestAnimationFrame(draw);
} 

animate();
