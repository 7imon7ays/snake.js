function Snake(xOrigin, yOrigin) {
	this.body = [[xOrigin, yOrigin]]

	this.xDelta = 1;
	this.yDelta = 0;

	this.growing = false;

};

Snake.prototype.move = function() {

	var headXCoord = this.body[0][0];
	var headYCoord = this.body[0][1];

	var newXCoord = headXCoord + this.xDelta;
	var newYCoord = headYCoord + this.yDelta;
	var newHead = [newXCoord, newYCoord];

	this.body.unshift(newHead);

	if (!this.foundApple()){
		this.body.pop();
	} else {
		game.placeApple();
	}
};

Snake.prototype.turn = function (direction) {
	switch(direction) {
	case "north":
		this.xDelta = -1;
		this.yDelta = 0;
		break;
	case "south":
		this.xDelta = 1;
		this.yDelta = 0;
		break;
	case "east":
		this.xDelta = 0;
		this.yDelta = 1;
		break;
	case "west":
		this.xDelta = 0;
		this.yDelta = -1;
		break;
	}
};

Snake.prototype.foundApple = function () {
	var xMatch = this.body[0][0] == game.apple[0];
	var yMatch = this.body[0][1] == game.apple[1];

	return xMatch && yMatch;
}

Snake.prototype.eat = function () {
	this.growing = true;
};

Snake.prototype.hitSelf = function () {
	var that = this;
	var snakeBodyParts = that.body.slice(1, that.body.length);
	matchFound = _.any(snakeBodyParts, function(bodyPart) {
		return bodyPart[0] === that.body[0][0] && bodyPart[1] === that.body[0][1];
	});
	return matchFound;
}

Snake.prototype.offscreen = function () {
	return (this.body[0][0] > 50) || (this.body[0][1] > 50 ||
					this.body[0][0] < 0) || (this.body[0][1] < 0)
};

game.snake = new Snake(0 , 1);