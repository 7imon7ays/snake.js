game.board = []

_.times(50, function(){
	var newRow = [];

	_.times(50, function() {
		newRow.push([])	;
	})

	game.board.push(newRow);
});

game.placeApple = function () {
	var randXPos = Math.floor(Math.random() * 50)
	var randYPos = Math.floor(Math.random() * 50)

	game.apple = [randXPos, randYPos];
};