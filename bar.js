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

	this.rand=random(40,130)/100;
	ymul=2

		if ((this.y-ball.y)>bheight/15){
			this.y-=abs(ball.yspeed)*this.rand
			console.log(this.rand)
		}else if((this.y-ball.y)<bheight/15){
			this.y+=abs(ball.yspeed)*this.rand
			console.log(this.rand)
		}
 		

 		if (ball.xspeed<15&&ball.xspeed>10&&(ball.yspeed<5||ball.yspeed>-5)) {
 			if (ball.yspeed<0) {
 				this.y-=ball.xspeed*ymul
 			} else {
 				this.y+=ball.xspeed*ymul
 			}
 			
 		}
	}

}