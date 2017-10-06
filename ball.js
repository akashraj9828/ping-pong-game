function ball() {
	this.x = width / 2;
	this.y = height / 2
	var offset = 10;
	this.xSpeedMax = 18
	this.ySpeedMax = 10
	this.xspeed=0;
	this.yspeed=0;

	this.setBallSpeed = function (xsp, ysp) {
		this.xspeed = random(-4, 4)//*speed;
		this.yspeed = random(-4, 4)//*speethisd;
		if (this.xspeed < 3 && this.xspeed > -3) {
			this.xspeed = constrain(this.xspeed * offset, -this.xSpeedMax, this.xSpeedMax)
		}
		if (this.yspeed < 2 && this.yspeed < -2) {
			this.yspeed = constrain(this.yspeed * offset, -this.ySpeedMax, this.ySpeedMax)
		}
		if ((xsp < 1 && xsp > -1) && (ysp < 1 && ysp > -1)) {
			this.setBallSpeed(this.xspeed, this.yspeed)
		}
		//console.log("x speed::"+this.xspeed+"\ny speed::"+this.yspeed)
	}
	this.setBallSpeed();

	this.dir = function () {		//constraints speeds
		this.xspeed = constrain(this.xspeed, -this.xSpeedMax, this.xSpeedMax);
		// this.yspeed=y;
		if (this.yspeed < 2 && this.yspeed > -2) {
			this.yspeed = constrain(this.yspeed, -this.ySpeedMax, this.ySpeedMax)
		}

	}

	this.update = function () {
		if (this.xspeed < 3 && this.xspeed > -3) {		//if xspeed is very low 
			off = random(1, 2)
			this.x = this.x + this.xspeed * off;		//giving some random boost bw 1 to 2 times
			this.y = this.y + this.yspeed;
		}
		else {

			this.x = this.x + this.xspeed;
			this.y = this.y + this.yspeed;
		}
		//console.log("x speed::"+this.xspeed+"\ny speed::"+this.yspeed)
	}

	this.show = function () {			//draw ball at (x,y)
		fill("white");

		ellipse(this.x, this.y, scl, scl);
	}


	this.wall = function (bar1) {


		var barTop = bar1.y - bheight / 2
		var downY = bar1.y + bheight / 2
		var delY = abs(this.y - bar1.y)
		var multiplier = map(delY, 0, bheight / 2, 0, 1)

		if (this.y > barTop && this.y < downY && this.x < bwidth) {

			temp = constrain(this.xspeed * multiplier * 10, -this.xSpeedMax, -4)
			this.yspeed = constrain(this.yspeed * multiplier, -this.ySpeedMax, this.ySpeedMax)
			this.xspeed = -temp
			paddleHit.play();
			// if (this.xspeed<4&&this.xspeed>-4) {
			// 	this.xspeed=constrain(this.xspeed,-this.xSpeedMax,this.xSpeedMax)+2
			// }

			this.dir(this.xspeed, this.yspeed)


			//console.log(multiplier)
		}
		if (this.x < 0) {
			missBall.play();
			dead = 1;

			p2score++
			//console.log("dead p1");
			this.reset(1);
		}
	}

	this.wallForBot = function (bar2) {


		var barTop = bar2.y - bar2.height / 2		//top of bar
		var barDown = bar2.y + bar2.height / 2		//bottom of bar
		var dist = abs(this.y - bar2.y)			//dist bw center of bar and ball
		
		//used to cahnge angle
		//	more the ball is away from center yspeed will increase more
		//	hence making more steeper angle
		var Y_multiplier = map(dist, 0, bar2.height / 2, 0.2, 1)	//maps  dist to 0.2 to 1


		if (this.y > barTop && this.y < barDown && this.x > width - bar2.width) {		//collison condition

			this.yspeed = constrain(this.yspeed * Y_multiplier, -this.ySpeedMax, this.ySpeedMax)
			this.xspeed = -this.xspeed
			this.dir()
			//console.log(Y_multiplier)
			paddleHit.play();
		}

		if (this.x > width) {
			dead = 1;
			p1score++
			missBall.play();
			//console.log("dead p2");
			this.reset(-1)
		}
	}

	this.bounce = function (s) {
		if (this.y > height || this.y < 0) {
			this.xspeed = this.xspeed
			this.yspeed = -this.yspeed
			this.dir(this.xspeed, this.yspeed)
			wallhit.play()
		}
	}

	this.reset = function (direc) {
		death = 0;
		this.x = width / 2;
		this.y = height / 2;
		this.xspeed = random(0, 4)
		this.yspeed = random(-4, 4)
		if (this.xspeed < 3 && this.xspeed > -3) {
			this.xspeed = constrain(this.xspeed * direc * offset, -this.xSpeedMax, this.xSpeedMax)
		}
		if (this.yspeed < 2 && this.yspeed < -2) {
			this.yspeed = constrain(this.yspeed * offset, -this.ySpeedMax, this.ySpeedMax)
		}
		//console.log("xspeed"+this.xspeed)

		//console.log("yspeed"+this.yspeed)}

	}
}


