
var scl=50;
var speed=3
var bheight=200;
var bwidth=30
var dead=0;
var p1score=0;
var p2score=0;
var winnningScore=1;
var b;


function setup(){
// frameRate(10)

var canvas = createCanvas(windowWidth-100,windowHeight-100);
 canvas.parent('game_window');
createBall();
bheight=height/5
bwidth=30
bar1=new bar();
bar2=new bar(width,height/2);
//frameRate(7);
displayText("PING-PONG", width/2, height/11)

	setInterval(function(){document.getElementById("fps").innerHTML=frameRate()},700)

}

function createLine(){
	gap=10
	s=0
	 stroke("white")
	 strokeWeight(3)
	 line(width/2,0,width/2,height) 
	 for (var i = 0; i < width/gap; i++) {
	 	stroke("black")
	 	strokeWeight(3)
	 	line(width/2,s,width/2,s+gap) 
	 	s+=30
	 }
}

function draw() {
  // document.getElementById("fps").innerHTML=frameRate();
background("black");
bar1.draw(); 
bar1.update();
createLine();
bar2.draw(); 
bar2.bot(b)


 b.update();
  b.show();
b.dir(b.xspeed,b.yspeed)
b.wall(bar1);
b.wallForBot(bar2);
b.bounce(1);
stroke("black");

displayText()



if(p1score>=winnningScore){
	console.log("p1 winss")
	p1score=0;
	p2score=0;
	noLoop();
	displayText("YOY WIN!!!!\nCLICK \n TO \n PLAY\nAGAIN",width/2,height/3,"LightCyan")
	if (mouseIsPressed) {
		
		createBall;
		loop();
	}


} else if (p2score>=winnningScore) {
	console.log('p2 winsss')
	p1score=0;
	p2score=0;
	noLoop();
displayText("BOT WIN!!!!\nCLICK \n TO \n PLAY\nAGAIN",width/2,height/3,"LightCyan")
	if (mouseIsPressed) {

		createBall;
		loop();
	}


}

	
// displayText(" CLICK \n TO \n PLAY\nAGAIN",width/2,height/2,"LightCyan")
console.log(p1score+"-----"+p2score)

// if(dead==1){
// 	b.reset();
// }
//else{ console.log(b.xspeed)}

displayText(p1score,width/4,height/12,"white",ITALIC)
displayText(p2score,3*width/4,height/12,"white",ITALIC)

}


function mouseClicked() {
createBall();
loop();
}


function createBall() {
	b=new ball();

}

function displayText(data,lox,loy,clr,style){

// 	scoreWidth=35
// 	textSize(20);
// 	fill(173, 150, 255);

// text("SCORE", width/2-scoreWidth, height/11);
//this.text1="S"
txt=""+data;
if (clr) {
	fill(clr);
} else {
	fill("black")
}
if (style) {
	textStyle(style)
} else {
	textStyle(NORMAL)
}


stroke(0)
textSize(40);
x=lox
y=loy
textAlign(CENTER)
text(txt, lox,loy);


}




