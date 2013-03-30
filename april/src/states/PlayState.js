/*
 *
 * PlayState is the actual game play. We switch to it once user choses "Start game"
 *
 */
function PlayState() {
	
	var player;
	//generic container for all bullets
	var bullets = new jaws.SpriteList();

	this.setup = function() {

		// Player setup.
		player = new Plane(jaws.width / 2, jaws.height / 2);
		console.log("Log: Player initialized");

		// To quit, press 'esc'
		jaws.on_keydown("esc", function() {
			jaws.switchGameState(MenuState);
		});

		// Prevent the browser from catching the following keys:
		jaws.preventDefaultKeys(["up", "down", "left", "right", "space"]);
	}

	this.update = function() {
		
		//if there are any bullets, call update on each of them.
		bullets.update();

		if (jaws.pressed("left")) {
			player.sprite.x -= 2;
		} else if (jaws.pressed("right")) {
			player.sprite.x += 2;
		}

		if (jaws.pressed("up")) {
			player.sprite.y -= 2;
		} else if (jaws.pressed("down")) {
			player.sprite.y += 2;
		}

		if (jaws.pressed("space")) {
			if (player.can_fire) {
				bullets.push(new Bullet(player.sprite.rect().right, player.sprite.y));
				player.can_fire = false;
				//cooldown for the weapon
				setTimeout(function() {
					player.can_fire = true;
				}, 100);
			}
		}

		forceInsideCanvas(player);
		
		// delete items for which isOutsideCanvas(item) is true
		bullets.removeIf(isOutsideCanvas);
		
		fps.innerHTML = jaws.game_loop.fps;
	}

	this.draw = function() {
		jaws.context.clearRect(0, 0, jaws.width, jaws.height);
		player.draw();
		bullets.draw();
		// will call draw() on all items in the list
	}
	/**
	 * Auxiliary function to check if |item| is outside the canvas
	 * @param {Object} item the item to check
	 */
	function isOutsideCanvas(item) {
		return (item.x < 0 || item.y < 0 || item.x > jaws.width || item.y > jaws.height);
	}

	/**
	 * Auxiliary function to keep |item| inside the canvas
	 * @param {Object} item the item to bound
	 */
	function forceInsideCanvas(item) {
		if (item.x < 0) {
			item.x = 0;
		}
		if (item.x + item.width > jaws.width) {
			item.x = jaws.width - item.width;
		}
		if (item.y < 0) {
			item.y = 0;
		}
		if (item.y + item.height > jaws.height) {
			item.y = jaws.height - item.height;
		}
	}

}

