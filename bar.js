function bar(posx,posy){


	if(posx){
		this.y=posy
		this.x=posx
	}else{

	this.x=0
	this.y=(height/2);
	}



	this.draw=function(){
		fill("white")
		rectMode(CENTER); 


		rect(this.x,this.y,bwidth,bheight)
	}

	this.update=function(){
		this.y=mouseY
	}


	this.bot=function(ball){

		if ((this.y-ball.y)>20){
			this.y-=8;
		}else if((this.y-ball.y)<20){
			this.y+=8;
		}

	}

}