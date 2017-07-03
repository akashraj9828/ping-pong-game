function ball(){
  this.x=width/2;
	this.y=height/2;
	this.xspeed=(random(-4,4)//*speed;
	this.yspeed=(random(-4,4)//*speed;
	
 	 this.dir=function(x,y){
		this.xspeed=x;
		this.yspeed=y;

	}

 	this.update=function(){
				

		this.x=this.x+this.xspeed*speed;
		this.y=this.y+this.yspeed*speed;
		
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

	 	
		this.yspeed=this.yspeed*multiplier
		this.xspeed=-this.xspeed
		this.dir(this.xspeed,this.yspeed)
		
	
	console.log(multiplier)
	}
	 if(this.x<0){
		dead=1;
		p2score++
		console.log("dead p1");
		this.reset(1);
	}
}

this.wallForBot=function(bar2){


 	var upY=bar2.y-bheight/2
	var downY=bar2.y+bheight/2
	var delY=abs(this.y-bar2.y)
	var multipl=map(delY,0,bheight/2,0,1)
	 if(this.y>upY&&this.y<downY&&this.x<width&&this.x>width-bwidth){
		
		this.yspeed=this.yspeed*multipl
		this.xspeed=-this.xspeed
		this.dir(this.xspeed,this.yspeed)
		console.log(multipl)
	
	}

	 if(this.x>width){
		dead=1;
		p1score++
		console.log("dead p2");
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
	this.xspeed=abs(random(0,5))*direc;
	this.yspeed=abs(random(0,5))*direc;
    console.log("xspeed"+this.xspeed)

console.log("yspeed"+this.yspeed)}

}