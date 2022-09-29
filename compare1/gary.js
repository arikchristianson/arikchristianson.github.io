var btn = document.getElementById("btn1");
btn.addEventListener('click', f)
function f(){
  var a =  Number(document.getElementById("X").value);
   var b = Number(document.getElementById("Y").value);
   var c = Number(document.getElementById("Z").value);
   
   var max;
   if (a >b){
    max=a
   } else {
    max=b
   } if (max<c){
    max=c
   }
   
    document.getElementById("output").innerHTML = max;
}

