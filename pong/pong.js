//canvas variables//
cv = document.getElementById("canvas");
ctx = canvas.getContex("2d");
cvs.width = 800;
cv.height = 500;
//ball variables//
var ball_size = 10; //(diameter)//
var ball_color = "white";
var ball_x = 400;
var ball_y = 250;
//paddle variables//
var width_paddle = 20;
var height_paddle = 80;
var paddle_color = "white";
var color_paddle = 0;
var position_paddle_x_left = 100;
var position_paddle_y_left = 250;
var position_paddle_x_right = 700;
var position_paddle_y_right = 250;
//calling paddle function//
createPaddle(width_paddle, height_paddle, color_paddle, paddle_x_left, paddle_y_left);
//paddle creation function//
function createPaddle(w,h,c,x,y){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}

//circle creation function//
function circle(){
    context.arc(300, 16, 10, 0, 2*Math.PI);
    context.strokeStyle = "white";
    context.lineWidth = 10;
    context.stroke();
    context.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}