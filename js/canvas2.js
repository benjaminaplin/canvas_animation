console.log('canvas2 linked!')

var c = document.getElementById('canvas').getContext('2d');
function Square(x, y, s, color) {
   this.x = x; this.y = y; this.s = s; this.color = color;
   this.zindex=0;
}
Square.prototype.draw = function(c) {
  c.fillStyle = this.color;
  c.fillRect(this.x, this.y, this.s, this.s);  
}
var squares = [
  new Square(10, 10, 50, 'blue'), new Square(40, 10, 40, 'red'), new Square(30, 50, 30, 'green'),
  new Square(60, 30, 40, '#111'), new Square(0, 30, 20, '#444'), new Square(70, 00, 40, '#999')
];

function draw() {
  c.fillStyle = "white";
  c.fillRect(0, 0, 1000, 500);
  for (var i=0; i<squares.length; i++) squares[i].draw(c);
}
setInterval(function(){
  // give all squares a random z-index
  squares.forEach(function(v){v.zindex=Math.random()});
  // sort the list accordingly to zindex
  squares.sort(function(a,b){return a.zindex-b.zindex});
  draw();
}, 1000);