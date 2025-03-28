var button = document.getElementById("button_id");
var canvas = document.getElementById("canvas_id");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0,50,200,50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();