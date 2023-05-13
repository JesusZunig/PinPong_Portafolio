var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var x = canvas.width/2;
var y = canvas.height-260;

var ballRadius = 10;

var paddleHeight = 120;
var paddleWidth = 10;
var paddleX = (canvas.width - paddleWidth)/6;
var paddleY = (canvas.height - paddleHeight)/2;

var paddleHeight2 = 120;
var paddleWidth2 = 10;
var paddleX2 = (canvas.width - paddleWidth2)/1.2;
var paddleY2 = (canvas.height - paddleHeight)/2;

var rightPressed = false;
var leftPressed = false;

var rightPressed2 = false;
var leftPressed2 = false;

var dx = 2;
var dy = -2;

var puntosP1 = 0;
var puntosP2 = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("keydown", keyDownHandler2, false);
document.addEventListener("keyup", keyUpHandler2, false);

function keyDownHandler(e){
	if(e.keyCode == 40){
		rightPressed = true;
	}
	else if(e.keyCode == 38){
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 40){
		rightPressed = false;
	}
	else if(e.keyCode == 38){
		leftPressed = false;
	}
}

function keyDownHandler2(e){
	if(e.keyCode == 65){
		rightPressed2 = true;
	}
	else if(e.keyCode == 81){
		leftPressed2 = true;
	}
}

function keyUpHandler2(e){
	if(e.keyCode == 65){
		rightPressed2 = false;
	}	
	else if(e.keyCode == 81){
		leftPressed2 = false;
	}
}

function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle2(){
	ctx.beginPath();
	ctx.rect(paddleX2, paddleY2, paddleWidth2, paddleHeight2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawline(){
    ctx.beginPath();
    ctx.moveTo(440, 0);
    ctx.lineTo(440, 520);
    //ctx.lineTo(480, 260);
	ctx.strokeStyle = "#FFFFFF";    
    ctx.stroke();
 	ctx.closePath();   
}

function drawcircle(){
	ctx.beginPath();
	ctx.arc(440, 260, 120, 0, Math.PI*2, false);
	ctx.strokeStyle = "#FFFFFF";
	ctx.stroke();
	ctx.closePath();
}

function drawBall(){
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function drawP1(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Puntos: " + puntosP1, 15, 20);
}

function drawP2(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Puntos: " + puntosP2, 780, 20)
}

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBall();
drawPaddle();
drawPaddle2();
drawline();
drawcircle();
drawP1();
drawP2();

//console.log("valor de x: " + x);
//console.log("valor de y: " +y);

//if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){ quitar si no funciona
//	dx = -dx; quitar si no funciona
/*	alert("GAME OVER");
    document.location.reload();
puntos = puntos + 1;
*/

//}quitar si no funciona

if(x + dx > canvas.width-ballRadius){
//dx = -dx;
x = canvas.width/2;
y = canvas.height-260;
dx = -2;
dy = -2;
paddleY = (canvas.height - paddleHeight)/2;
paddleY2 = (canvas.height - paddleHeight)/2;

puntosP1 += 1;

if(puntosP1 == 5){

alert("PLAYER 1 GANA");
document.location.reload();	
	
}

}else if(x + dx < ballRadius){
//dx = -dx;
x = canvas.width/2;
y = canvas.height-260;
dx = 2;
dy = -2;
paddleY = (canvas.height - paddleHeight)/2;
paddleY2 = (canvas.height - paddleHeight)/2;

puntosP2 += 1;

if(puntosP2 == 5){

alert("PLAYER 2 GANA");
document.location.reload();	
	
}

}

if(y > paddleY2 && y < paddleY2 + paddleHeight2 && x == 718){
	dx = -dx;
/*console.log("entro")
console.log("valor de y: " + y);
console.log(" ");
console.log("paddleY2: "+ paddleY2);
console.log(" ");
console.log("paddleY2: " + (paddleY2 + paddleHeight2));
console.log(" ");*/
//console.log("valor de x del if:" + x)
}


if(y > paddleY && y < paddleY + paddleHeight && x == 154){
	dx = -dx;
	//console.log("valor de x del if:" + x)
}

/*if(x > paddleX && x < paddleX + paddleWidth){
	dx = -dx;



}
paddleY mac=403
paddle min= -3
*/

/*else if(x > paddleX2 && x < paddleX2 + paddleWidth2){
	dx = -dx;
}/*else if(y > paddleX && x < paddleX + paddleWidth){
	dx = -dx;
}*/

if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
	dy = -dy;
}

if(rightPressed && paddleY < canvas.height-paddleHeight){
	paddleY += 7;
}
else if(leftPressed && paddleY > 0){
	paddleY -= 7;
}

if(rightPressed2 && paddleY2 < canvas.height-paddleHeight2){
	paddleY2 += 7;
}
else if(leftPressed2 && paddleY2 > 0){
	paddleY2 -=7;
}

x += dx;
y += dy;

//console.log("valor de x: " + x);
//console.log(" ");
//console.log("valor de y: " + y);
//console.log(" ");
//console.log("paddleY2: "+ paddleY2);
//console.log(" ");
//console.log("paddleY2: " + (paddleY2 + paddleHeight2));
//console.log(" ");
}



setInterval(draw, 10);

/*
var ballRadius = 10;

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;


var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;
	}
	else if(e.keyCode == 37){
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;
	}
	else if(e.keyCode == 37){
		leftPressed = false;
	}
}

function drawBall(){
ctx.beginPath();//inicio
ctx.arc(x, y, ballRadius, 0 ,Math.PI*2);//dibuja un circurlo
ctx.fillStyle = "#0095DD";//colorea el circulo
ctx.fill();//ejecuta
ctx.closePath();//Cierra
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
	//codigo para dibujar
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBall();
drawPaddle();



if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
	dx = -dx;
}

if(y + dy < ballRadius){
	dy = -dy;
} else if(y + dy > canvas.height-ballRadius){
	if(x > paddleX && x < paddleX +paddleWidth){
		dy = -dy;
	}
	else{
		//alert("Game Over");
		location.reload();
	}
}

if(rightPressed && paddleX < canvas.width-paddleWidth){
	paddleX += 7;
} 
else if(leftPressed && paddleX > 0){
	paddleX -=7;
}





x += dx;
y += dy;

}







setInterval(draw, 10);

*/

/*
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/