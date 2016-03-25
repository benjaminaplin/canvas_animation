console.log('canvas3 linked')
var forward = true;

var one = function one(){
  console.log('one');
}

var two = function two(){
  console.log('two');
}

var three = function three(){
  console.log('three');
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
