console.log('canvas linked!')

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();

var img1PosX = 50;
var img1PosY = 50;
var img3PosX = 150;
var img3PosY = 150;
var img2PosX = 100;
var img2PosY = 100;
var img2width = 100;
var img2height = 100;

var speed = 2;
var img2speed = 2;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function animation1(){
    if (img1PosY <= 50 && img1PosY > 0){
      img1PosX -= speed;
      img1PosY -= speed;      
    } 
    if (img1PosY == 0){
      img1PosX += speed;
    }
    if (img1PosX == 200){
      speed = 0;
    }

    if (img3PosY >= 150 && img3PosY < 200){
      img3PosX += speed;
      img3PosY += speed;
    }
    if (img3PosY == 200){
      img3PosX -= speed;
    }


    if (speed == 0 && img2height <= 300) {
      image2.zindex = 100;
      console.log('heyo')
      img2PosY -= img2speed;
      img2PosX -= img2speed;
      img2height += img2speed * 2;
      img2width += img2speed * 2;
    }
}

function animate(){
  console.log('animating')
  requestAnimationFrame(animate);
  image1.src = 'http://riley.dev.kargo.com/code-test/test0.png'
  image2.src = 'http://riley.dev.kargo.com/code-test/test1.png'
  image3.src = 'http://riley.dev.kargo.com/code-test/test2.png'
  animation1();
  requestAnimationFrame(draw);
}

function draw(){
  console.log('drawing')
  console.log(image2.zindex)

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "destination-over";
  ctx.canvas.width  = 300;
  ctx.canvas.height = 300;
  ctx.fillStyle = "#d3d3d3";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //somehow put these into an array and 
  //draw them in a different order when the first two 
  //animation sequences are finished
  
  ctx.drawImage(image1,img1PosX,img1PosY);
  ctx.drawImage(image2,img2PosX,img2PosY,img2width,img2height);
  ctx.drawImage(image3,img3PosX,img3PosY);
  ctx.save();
  var requestID = requestAnimationFrame(draw);
} 

animate();

setTimeout(function(){ 
  cancelAnimationFrame(requestID);
 }, 5000);

