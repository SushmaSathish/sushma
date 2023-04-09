/*var x = 2;
function getName(){
    console.log("sushma");
}
getName();
console.log(x);
console.log(getName);*/
/*var obj ={
    "key1" : value1,
    "key2" : value2,
    "key3" : value3,

}
var arr =[value1,value2]
console.log(object.keys(obj));

let argToArray = function(){
    [].slice.call(arguments);
}
argToArray(1,2,3);*/
function attachEventListeners(){
   let count = 0;
document.getElementById("click me").addEventListener("click", function xyz(){
 console.log("Button clicked",++count);
})
}
attachEventListeners();

//strict;
let getA = a => a;
console.log(getA(4));
let square = a => a*a;
console.log(square(4));