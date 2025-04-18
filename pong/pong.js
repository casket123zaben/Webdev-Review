//canvas variables//
cv = document.getElementById("canvas");
ctx = canvas.getContext("2d");
cv.width = 800;
cv.height = 500;
//speed of the ball(velocity)//
var x_vel = 2;
var y_vel = 2;
//ball variables//
var ball_size = 20; //(diameter)//
var ball_color = "white";
var ball_x = 400;
var ball_y = 250;
//paddle variables//
var width_paddle = 30;
var height_paddle = 120;
var paddle_color = "white";
var color_paddle = 0;
var position_paddle_x_left = 95;
var position_paddle_y_left = 210;
var position_paddle_x_right = 675;
var position_paddle_y_right = 210;
//calling left paddle function//
createLeftPaddle(width_paddle, height_paddle, paddle_color, position_paddle_x_left, position_paddle_y_left);
//calling right paddle function//
createRightPaddle(width_paddle, height_paddle, paddle_color, position_paddle_x_right, position_paddle_y_right);
//paddle creation function//
//left paddle//
function createLeftPaddle(w,h,c,x,y){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}
//right paddle//
function createRightPaddle(w,h,c,x,y){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fillSyle = c;
    ctx.fill();
}
//calling ball function//
createBall(ball_x, ball_y, ball_size,ball_color);
//ball creation funciton//
function createBall(x,y,r,c){
    var path = new Path2D()
    path.arc(x,y,r,0,2 * Math.PI);
    ctx.fillStyle = c;
    ctx.fill(path)
}
//function for moving the ball//
function moveBall(){
    //definging left bounds//
    if(ball_x + x_vel > cv.width){

    }
}