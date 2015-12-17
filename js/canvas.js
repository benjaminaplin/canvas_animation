console.log('canvas linked!')

//create images with image constructor
var image1 = new Image(),
    image2 = new Image(),
    image3 = new Image();


//set X and Y positions of each image
var img1PosX = 50,
    img1PosY = 50,
    img3PosX = 150,
    img3PosY = 150,
    img2PosX = 100,
    img2PosY = 100,
    //set width and height of image2, which expands at the end of animation    
    img2width = 100,
    img2height = 100,
    //set a boolean to control the order of animation    
    runAnimationInOrder = true,
    //set speed of movement of squares    
    speed = 2,
    //set speed of expansion of image2    
    img2speed = 2;

 var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

// this function controls the all of the animation of the squares
function animateSquares(){
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
      runAnimationInOrder = false
      img2PosY -= img2speed;
      img2PosX -= img2speed;
      img2height += img2speed * 2;
      img2width += img2speed * 2;
    }
}
/* 
  the 'animate' function requests the animation frame, 
  defines the image sources, calls the animation frame function, 
  and then fires the draw function, triggering each iteration of
  drawing a new frame
*/
function animate(){
  requestAnimationFrame(animate);
  image1.src = 'http://riley.dev.kargo.com/code-test/test0.png'
  image2.src = 'http://riley.dev.kargo.com/code-test/test1.png'
  image3.src = 'http://riley.dev.kargo.com/code-test/test2.png'
  animateSquares();
  requestAnimationFrame(draw);
}

// the draw function does the drawing
function draw(){
  //declares variables for draw function for image2
  var image, dx, dy, dWidth, dHeight
  //next lines select canvas element in HTML and 
  //initializes size and background color of canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = 300;
  ctx.canvas.height = 300;
  ctx.fillStyle = "#d3d3d3";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  //the following three functions draw the animation of the squares
  var draw1 = function draw1(){
    ctx.drawImage(image1,img1PosX,img1PosY);
  }

  var draw2 = function draw2(){
    ctx.drawImage(image2,img2PosX,img2PosY,img2width,img2height);
  }

  var draw3 = function draw3(){
    ctx.drawImage(image3,img3PosX,img3PosY);
  }
  //this array sets the order squares are drawn in,
  // making up for the lack of 'z-index' in canvas
  var drawArray = [draw1,draw2,draw3];
  
  if (runAnimationInOrder == true){
  //if true, it draws squares in order 1,2,3
   drawArray.forEach(function(e){
    e();
   });
  }
  if(runAnimationInOrder == false){
  //if false, it draws squares in order 1,3,2, so
  //that image2 overlaps the others as it expands
    drawArray = [draw1,draw3,draw2];
    drawArray.forEach(function(e){
      e();
    });
    // resets the order of the array
    drawArray = [draw1,draw2,draw3];
  }
} 

animate();

