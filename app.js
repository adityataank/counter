const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
var counter = 0 ;
minus.addEventListener('click',e=>{
    document.getElementById("num").innerHTML = --counter;
})
plus.addEventListener('click',e=>{
    document.getElementById("num").innerHTML = ++counter;
})
reset.addEventListener('click',e=>{
    counter = 0 ;
    document.getElementById("num").innerHTML = counter;
})