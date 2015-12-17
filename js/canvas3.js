console.log('canvas3 linked')
var forward = true;

var one = function one(){
  console.log('dong1');
}

var two = function two(){
  console.log('dong2');
}

var three = function three(){
  console.log('dong3');
}

var arr = [one, two, three]

if (forward == true){
 arr.forEach(function(e){
  e();
 });
} else {
  arr.reverse();
  arr.forEach(function(e){
    e();
  });
  arr.reverse();
}
