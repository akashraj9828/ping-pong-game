// var paddleY1
// var paddleY2
// var paddle_height
// var ballX
// var ballY
// var ballVelX
// var ballVelY
// var ballSize=20;
// var ball
// var val;
// // function renderBall();
// // function updateBall();
// // function wall();


function setup() {

	
	
	frameRate()
var canvas = createCanvas(windowWidth-100,windowHeight-100);
 canvas.parent('game_window');
 balls=new BALL();
 background(51);
 line(width/2,0,width/2,height)
 // ballPosX=width/2;
 // ballPosY=height/2;
 // ballVelX=1;
 // ballVelY=0;

}



function draw(){

balls.update();
balls.renderBall();
	//balls.dir(1,0)
	
	
// wall();
}

function BALL(){
this.ballPosX=width/2
this.ballPosY=height/2
this.ballVelX=0
this.ballVelY=1
this.renderBall=function(){//function renderBall(){
	ellipse(this.ballPosX,this.ballPosY,20,20);
 }
this.dir=function(x,y){
	this.ballVelX=x;
	this.ballVelY=y;

}
this.update=function(){//function update(){
	//console.log("updatecalled")	
	this.ballPosX+=this.ballVelX
	this.ballPosY+=this.ballVelY
	
	

}
// function wall(){
// 	if(ballPos.x>width || ballPos.x<0){
// 		ballVel.x=-ballVel.x
// 	}
// 	if(ballPos.y>height||ballPos.y<0){
// 		ballVel.y=-ballVel.y
// 	}
// }
}

class_name.prototype.method_name = function(first_argument) {
	// body...
};

for (var i = this.length - 1; i >= 0; i--) {
	this[i]
}

for (var i = 0; i < ; i++) 



if (true) {} else {}	if (true) {}
	function() {				}unction function_name(argument) {
		// body...
	}

	fkey: "value", 						

	function function_name(argument) {
		// body...
	}