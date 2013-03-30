/*
 *
 * MenuState is our lobby/welcome menu were gamer can chose start, high score and settings.
 * For this example we have only implemented start. Start switches active game state by simply:
 *   jaws.switchGameState(play)   (jaws.switchGameState(PlayState) would have worked too)
 *
 */
function MenuState() {
	var index = 0
	var items = ["Start", "About","FAP"]

	this.setup = function() {
		index = 0
		jaws.on_keydown(["down", "s"], function() {
			index++;
			if (index >= items.length) {
				index = items.length - 1
			}
		})
		
		jaws.on_keydown(["up", "w"], function() {
			index--;
			if (index < 0) {
				index = 0
			}
		})
		
		jaws.on_keydown(["enter", "space"], function() {
			if (items[index] == "Start") {
				jaws.switchGameState(PlayState, {
					fps : 60
				})
			}
			else if (items[index] == "FAP") {
				jaws.switchGameState(FAPState, {
					fps : 60
				})
			}
		})
	}

	this.draw = function() {
		jaws.context.clearRect(0, 0, jaws.width, jaws.height)
		for (var i = 0; items[i]; i++) {

			jaws.context.font = "bold 120pt terminal";
			jaws.context.lineWidth = 20
			jaws.context.fillStyle = (i == index) ? "Red" : "Black"
			jaws.context.strokeStyle = "rgba(200,200,200,0.0)"
			jaws.context.fillText(items[i], 30, jaws.height / 2.5 + i * (200))
		}
	}
}