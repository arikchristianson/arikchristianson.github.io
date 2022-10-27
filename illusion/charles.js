var painter1 =document.getElementById("c1").getContext("2d");

painter1.fillStyle = "#444444";
painter1.fillRect(0,0,400,400);

painter1.fillStyle = "#CCCCCC";
var count;
for (var j=0; j<40; ++j){
for (var i= 0; i<40;++i){

    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( i *20 , 10 + j*20, 10, 10);
   
    }
count++
}

painter1.fillStyle = "#CCCCCC";
var count;
for (var j=0; j<40; ++j){
for (var i= 0; i<40;++i){

    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect(10+ i *20 , j*20, 10, 10);
   
    }
count++
}


painter1.fillStyle = "#000000";
var count;
for (var j=0; j<40 - 1; ++j){
for (var i= 0; i<40;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 8+ i *20 , 8 + j*20, 4, 4);
count++
}

    
}
painter1.fillStyle = "#000000";
var count;
for (var j=0; j<40 - 1; ++j){
for (var i= 0; i<40;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 18+ i *20 , 18 + j*20, 4, 4);
count++
}

    
}
painter1.fillStyle = "#FFFFFF";
var count;
for (var j=0; j<40; ++j){
for (var i= 0; i<40;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 8+ i *20 , 18 + j*20, 4, 4);
count++
}

    
}
painter1.fillStyle = "#FFFFFF";//white
var count;
for (var j=0; j<40; ++j){
for (var i= 0; i<40;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 18+ i *20 , 8 + j*20, 4, 4);
count++
}

    
}

painter1.fillStyle = "#FFFFFF";//illusion was purp
var count;
for (var j=0; j<10; ++j){
for (var i= 0; i<10;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 108+ i *20 , 108 + j*20, 4, 4);
count++
}

    
}
painter1.fillStyle = "#FFFFFF";//illusion was purp
var count;
for (var j=0; j<10; ++j){
for (var i= 0; i<10;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 118+ i *20 , 118 + j*20, 4, 4);
count++
}

    
}


    

painter1.fillStyle = "#000000";//illusion was green
var count;
for (var j=0; j<10; ++j){
for (var i= 0; i<10;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 118+ i *20 , 108 + j*20, 4, 4);
count++
}

    
}
painter1.fillStyle = "#000000";//illusion was green
var count;
for (var j=0; j<10; ++j){
for (var i= 0; i<10;++i){
    if ((((count)*-1)**2) >= 0) {
        break;

    }
    painter1.fillRect( 108+ i *20 , 118 + j*20, 4, 4);
count++
}

    
}
