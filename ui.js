game.show = function () {

	var that = this;
	$('div').remove();

	_.each(that.board, function(row, rowIndex){

		var $newDiv = $('<div>');
		$('body').append($newDiv);

		_.each(row, function(tile, tileIndex){
			$newSquare = $('<span>');

			if (that.checkBodyPosition(rowIndex, tileIndex)) {
				$newSquare.html('x')
			}

			if (that.apple[0] === rowIndex && that.apple[1] === tileIndex) {
				$newSquare.html('*')
			}

			$newDiv.append($newSquare);
		});

	});

}


game.checkBodyPosition = function (rowIndex, tileIndex) {

	var snakeBodyParts = this.snake.body;
	matchFound = _.any(snakeBodyParts, function(bodyPart) {
		return bodyPart[0] === rowIndex && bodyPart[1] === tileIndex;
	});
	return matchFound;
}
