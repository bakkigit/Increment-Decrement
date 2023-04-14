let inputfield = document.getElementById("inputfield");

let minus = document.getElementById("minus");
let plus  =document.getElementById("plus");
let integer = 0;

plus.addEventListener("click",function(){
  integer = integer + 1;
  inputfield.value = integer;

})

minus.addEventListener("click",function(){
  integer -= 1;
  inputfield.value = integer;

})