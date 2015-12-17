console.log('canvas linked!')

var image1 = new Image(),
    image2 = new Image(),
    image3 = new Image();

var img1PosX = 50,
    img1PosY = 50,
    img3PosX = 150,
    img3PosY = 150,
    img2PosX = 100,
    img2PosY = 100,
    img2width = 100,
    img2height = 100,
    forward = true,
    speed = 2,
    img2speed = 2;

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
      forward = false
      console.log(forward)
      img2PosY -= img2speed;
      img2PosX -= img2speed;
      img2height += img2speed * 2;
      img2width += img2speed * 2;
    }
}

function animate(){
  requestAnimationFrame(animate);
  image1.src = 'http://riley.dev.kargo.com/code-test/test0.png'
  image2.src = 'http://riley.dev.kargo.com/code-test/test1.png'
  image3.src = 'http://riley.dev.kargo.com/code-test/test2.png'
  animation1();
  requestAnimationFrame(draw);
}

function draw(){
  var image, dx, dy, dWidth, dHeight
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

  var draw1 = function draw1(){
    ctx.drawImage(image1,img1PosX,img1PosY);
  }

  var draw2 = function draw2(){
    ctx.drawImage(image2,img2PosX,img2PosY,img2width,img2height);
  }

  var draw3 = function draw3(){
    ctx.drawImage(image3,img3PosX,img3PosY);
  }

  var drawArray = [draw1,draw2,draw3];
  
  if (forward == true){
    console.log('true', drawArray)
    //if true, it runs 1,2,3
   drawArray.forEach(function(e){
    e();
   });
  }
  if(forward == false){
    console.log('false', drawArray)

    //if false, it runs 1,3,2
    drawArray = [draw1,draw3,draw2];
    drawArray.forEach(function(e){
      e();
    });
    drawArray = [draw1,draw2,draw3];
  }
  

  ctx.save();
  var requestID = requestAnimationFrame(draw);
} 

animate();

setTimeout(function(){ 
  cancelAnimationFrame(requestID);
 }, 5000);

