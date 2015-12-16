console.log('canvas linked!')

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();
var canvas = document.getElementById("canvas");

function init(){
  image1.src = 'http://riley.dev.kargo.com/code-test/test0.png'
  image2.src = 'http://riley.dev.kargo.com/code-test/test1.png'
  image3.src = 'http://riley.dev.kargo.com/code-test/test2.png'
  window.requestAnimationFrame(draw);
}

function draw(){
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = 300;
  ctx.canvas.height = 300;
  ctx.fillStyle = "#d3d3d3";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(image1,50,50,100,100);
  ctx.drawImage(image2,100,100,100,100);
  ctx.drawImage(image3,150,150,100,100);
  ctx.save();
  
  //begin animation
  



  window.requestAnimationFrame(draw);
} 

init();
