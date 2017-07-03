function ball(){
  this.x=width/2;
	this.y=height/2;
	// if (xspd){
	// 	this.xspeed=xspd
	// this.yspeed=yspd
	// }


	//	else{
	this.xspeed=random(-1,1)*speed;
	this.yspeed=random(-1,1)*speed;
	this.copyXspeed=this.xspeed
	this.copyYspeed=this.yspeed
	//}
 	 this.dir=function(x,y){
		this.xspeed=x;
		this.yspeed=y;
	}

 	this.update=function(){
				

		this.x=this.x+this.xspeed*speed;
		this.y=this.y+this.yspeed*speed;
		
	}

 	this.show=function(){
		fill(255);
		
	ellipse(this.x,this.y,scl,scl);
	}


this.wall=function(bar1){


 	
	 if(this.x<0&&this.y>upY&&this.y<downY){
	 	var upY=bar1.y-bheight/2
		var downY=bar1.y+bheight/2
		var deltaY=abs(this.y-bar1.y)
		
		this.xspeed=-this.xspeed
		this.yspeed=this.yspeed*deltaY
		this.dir(this.xspeed,this.yspeed)
		console.log(deltaY)
	}else {
		//
		this.reset();
	}
	//
	//  if(this.x<0){
	// 	dead=1;
	// 	console.log("dead p1");
	// 	this.reset(1);
	// 


}
	


this.wallForBot=function(bar2){


 	var upY=bar2.y-bheight/2
	var downY=bar2.y+bheight/2
	var multipl=abs(this.y-bar2.y)
	
	 if(this.y>upY&&this.y<downY&&this.x>width){
		
		this.yspeed=this.yspeed*multipl*0.1
		this.xspeed=-this.xspeed*multipl*0.1
		this.dir(this.xspeed,this.yspeed)
		console.log(multipl)
	}else {
			//p1score++; // must be BEFORE ballReset()
			this.reset()

	 // if(this.x>width){
		// dead=1;
		// console.log("dead p2");
		// this.reset(-1)
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
	this.xspeed=this.copyXspeed;
	this.yspeed=this.copyYspeed;
    console.log("xspeed"+this.xspeed)

// console.log("yspeed"+this.yspeed)
// ball(this.copyXspeeed,this.copyYspeed);

}

}