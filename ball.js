function ball(){
  this.x=width/2;
	this.y=height/2
	var offset=10;
	Xsmax=18
	Ysmax=10
	

	this.setBallSpeed=function(xsp,ysp){
	this.xspeed=random(-4,4)//*speed;
	this.yspeed=random(-4,4)//*speethisd;
	if (this.xspeed<3&&this.xspeed>-3) {
		this.xspeed=constrain(this.xspeed*offset,-Xsmax,Xsmax)
	}
	if (this.yspeed<2&&this.yspeed<-2){
		this.yspeed=constrain(this.yspeed*offset,-Ysmax,Ysmax)
	}
	if((xsp<1&&xsp>-1)&&(ysp<1&&ysp>-1)){
	this.setBallSpeed(this.xspeed,this.yspeed)
 	}
 	//console.log("x speed::"+this.xspeed+"\ny speed::"+this.yspeed)
 }
this.setBallSpeed();

 	this.dir=function(x,y){
		this.xspeed=constrain(x,-Xsmax,Xsmax);
		// this.yspeed=y;
		if(y<2&&y>-2){
		this.yspeed=constrain(y*offset,-Ysmax,Ysmax)
		}

	}

 	this.update=function(){
				if(this.xspeed<3&&this.xspeed>-3)
					{off=random(2,4)
						this.x=this.x+this.xspeed*off;
		this.y=this.y+this.yspeed;}
		else{

		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;
	}
		//console.log("x speed::"+this.xspeed+"\ny speed::"+this.yspeed)
	}

 	this.show=function(){
		fill("white");
		
	ellipse(this.x,this.y,scl,scl);
	}


this.wall=function(bar1){


 	var upY=bar1.y-bheight/2
	var downY=bar1.y+bheight/2
	var delY=abs(this.y-bar1.y)
	var multiplier=map(delY,0,bheight/2,0,1)
	
	 if(this.y>upY&&this.y<downY&&this.x<bwidth){

	 	temp=constrain(this.xspeed*multiplier*10,-Xsmax,-4)
		this.yspeed=constrain(this.yspeed*multiplier,-Ysmax,Ysmax)
		this.xspeed=-temp
		// paddleHit.play();
	// if (this.xspeed<4&&this.xspeed>-4) {
	// 	this.xspeed=constrain(this.xspeed,-Xsmax,Xsmax)+2
	// }
		
		this.dir(this.xspeed,this.yspeed)
		
	
	//console.log(multiplier)
	}
	 if(this.x<0){
		// missBall.play();
		dead=1;

		p2score++
		//console.log("dead p1");
		this.reset(1);
	}
}

this.wallForBot=function(bar2){


 	var upY=bar2.y-bheight/2
	var downY=bar2.y+bheight/2
	var delY=abs(this.y-bar2.y)
	var multipl=map(delY,0,bheight/2,0,1)
	 if(this.y>upY&&this.y<downY&&this.x<width&&this.x>width-bwidth){
		
		this.yspeed=constrain(this.yspeed*multipl,-Ysmax,Ysmax)
		this.xspeed=-this.xspeed
		this.dir(this.xspeed,this.yspeed)
		//console.log(multipl)
	// paddleHit.play();
	}

	 if(this.x>width){
		dead=1;
		p1score++
		// wallhit.paly();
		//console.log("dead p2");
		this.reset(-1)
	}
}

this.bounce=function(s){
	if(this.y>height||this.y<0){
		this.xspeed=this.xspeed
		this.yspeed=-this.yspeed
		this.dir(this.xspeed,this.yspeed)
	}
}

this.reset=function(direc){
	death=0;
	this.x=width/2;
	this.y=height/2;
	this.xspeed=random(0,4)
	this.yspeed=random(-4,4)
	if (this.xspeed<3&&this.xspeed>-3) {
		this.xspeed=constrain(this.xspeed*direc*offset,-Xsmax,Xsmax)
	}
	if (this.yspeed<2&&this.yspeed<-2){
		this.yspeed=constrain(this.yspeed*offset,-Ysmax,Ysmax)
	}
    //console.log("xspeed"+this.xspeed)

//console.log("yspeed"+this.yspeed)}

}
}


