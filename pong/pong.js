/canvas variables/
canvas = document.getElementById("canvas");
context = canvas.getContex("2d");
/circle variables/
var circle_diameter = 0
var color_circle = "white";
var position_circle = 0;
/paddle variables/
var width_paddle = 0
var height_paddle = 0
var color_paddle = "white";
var color_paddle = 0;
var position_paddle = 0;
/paddle creation function/
function paddle(){
    context.rect(40,50,12,16);
    context.strokeStyle = "white";
    context.lineWidth = 10;
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
}
/circle creation function/
function circle(){
    context.arc(30, 16, 10, 0, 2*Math.PI);
    context.strokeStyle = "white";
    context.lineWidth = 10;
    context.stroke();
    context.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}