game.play = function () {
	var that = this;
  this.snake = new Snake(0 , 1);
  this.snake.score = 0;
	this.placeApple();

	var intervalID = window.setInterval(
		function(){
			that.snake.move();
			that.snake.growing = false;
			that.show();
      that.updateScore();
			$(document).keydown(function(event){
				var keyPressed = event.which;
				switch(keyPressed) {
				case 39:
					that.snake.turn("east");
					break;
				case 40:
					that.snake.turn("south");
					break;
				case 37:
					that.snake.turn("west");
					break;
				case 38:
					that.snake.turn("north");
					break;
				}
			});
			if (that.snake.offscreen() || that.snake.hitSelf()) {
				clearInterval(intervalID);
        game.over();
			}
		},
		5);
}
