
var scl=50;

function setup(){

	this.x=0;
	this.y=0;
	this.xspeed=1;
	this.yspeed=0;
	frameRate()
	var canvas = createCanvas(windowWidth-100,windowHeight-100);
	canvas.parent('game_window');
	b= new ball();
//frameRate(7);




}


function draw() {
	background("gray");
	update();
	show();
	dir(1,0)
	wall();
	stroke("black");
	line(width/2,0,width/2,height)





}








function dir(x,y){
	this.xspeed=x;
	this.yspeed=y;
}

function update() {


	this.x=this.x+this.xspeed*scl;
	this.y=this.y+this.yspeed*scl;

}

function show (){
	fill(255);

	ellipse(this.x,this.y,scl,scl);
}


function wall(){
	if(this.x>width){
		this.xspeed=-this.xspeed
	}else if(this.y>height){
		this.yspeed=-this.yspeed
	}
}

}

