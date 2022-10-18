var painter1 =document.getElementById("c1").getContext("2d");
var painter2 =document.getElementById("c2").getContext("2d");

function drawBackround1(painter){
painter1.fillStye = "#000000";
painter1.fillRect(0,0,400,400);
}
drawBackround1(painter1);


painter1.fillStyle = "#FF0000";
for (var j=0; j<13; ++j){
for (var i= 0; i<13;++i){
    painter1.fillRect(10 + i *30 , 10+j*30, 20, 20)
}
}


function drawBackround2(painter){
    painter2.fillStye = "#000000";
    painter2.fillRect(0,0,400,400);
    }
    drawBackround2(painter2);


painter2.fillStyle = "#FF0000";
var k =0;
while(k<13){
    k=k+1;
    painter2.fillRect(-20 + k *30, 400-k*30, 20,20);
}