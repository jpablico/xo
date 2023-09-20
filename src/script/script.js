const gameXnO = (function() {
	"use strict";

	function gameBoardSetup() {
		const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

		function gameBoardInitialization() {
			var createDiv = document.createElement('div');
			createDiv.className = 'gameTile bg-blue-400 border-solid';
			createDiv.innerHTML = 'Tile';

			createDiv.addEventListener("click", function() {
				console.log("BOP")
			})
			document.getElementById('main').appendChild(createDiv);

			}
		gameBoard.forEach(gameBoardInitialization);
	}

	return {
		publicMethod: function() {
			gameBoardSetup();
		}
	};
})();


gameXnO.publicMethod();

