game.show = function () {

	var that = this;
	$('.row').remove();
	_.each(that.board, function(row, rowIndex){

		var $newDiv = $("<div class='row'>");
		$('.container-box').append($newDiv);

		_.each(row, function(tile, tileIndex){
			$newSquare = $("<span class='tile'>");

			if (that.checkBodyPosition(rowIndex, tileIndex)) {
				$newSquare.addClass('snake-spot');
			}

			if (that.apple[0] === rowIndex && that.apple[1] === tileIndex) {
				$newSquare.addClass('apple-spot');
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

game.updateScore = function () {
  $('.score').html(this.snake.score);
};

game.over = function () {
  delete this.snake;
  $('.container-box').append("<span class='game-over'>Game Over</span>");
  $(document).keydown(function (event) {
    if (event.which == 13) {
      this.removeEventListener("keydown");
      $('.game-over').remove();
      game.play();
    }
  });
};
