var canvas= new fabric.Canvas('myCanvas');
playerX= 10;
playerY= 10;
blockWidth= 30;
blockHeight= 30;
playerobject= "";
blockobject= "";
function player(){
    fabric.Image.fromURL("player.png",function(Img){
       playerobject= Img;
       playerobject.scaleToWidth(150);
       playerobject.scaleToHeight(150);
       playerobject.set({
           top:playerY,
           left:playerX
       });
       canvas.add(playerobject);
    });
} 
function block(getimage){
    fabric.Image.fromURL(getimage,function(Img){
       blockobject= Img;
       blockobject.scaleToWidth(blockWidth);
       blockobject.scaleToHeight(blockHeight);
       blockobject.set({
           top:playerY,
           left:playerX
       });
       canvas.add(blockobject);  
    });
} 