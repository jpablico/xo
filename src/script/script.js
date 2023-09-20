const gameXnO = (function() {
	"use strict";

	function gameBoardSetup() {
		const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

		function gameBoardInitialization() {
			var createDiv = document.createElement('div');
			createDiv.className = 'gameTile bg-blue-400 border-solid';
			createDiv.innerHTML = 'Tile';
			document.getElementById('main').appendChild(createDiv);
		}
		console.log("Bop");
		gameBoard.forEach(gameBoardInitialization)
	}

	return {
		publicMethod: function() {
			gameBoardSetup();
		}
	};
})();


gameXnO.publicMethod();

