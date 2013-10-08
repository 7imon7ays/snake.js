game.board = []

_.times(25, function(){
	var newRow = [];

	_.times(25, function() {
		newRow.push([])	;
	})

	game.board.push(newRow);
});

game.placeApple = function () {
	var randXPos = Math.floor(Math.random() * 25);
	var randYPos = Math.floor(Math.random() * 25);

	game.apple = [randXPos, randYPos];
};
