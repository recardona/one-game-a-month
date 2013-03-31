/**
 * This is what the Plane (@see Plane.js) shoots.
 * @param {Object} x the starting x coordinate for this Bullet
 * @param {Object} y the starting y coordinate for this Bullet
 */
function Dude(x, y) {
	this.x = x;
	this.y = y;

	this.update = function() {
		this.x += 4;
		//upon firing, keep moving toward the right
	}

	this.draw = function() {
		sprite_sheet = new jaws.SpriteSheet({image: "./assets/art/charzera_0.png", frame_size: [14,3] })
		sprite_sheet.frames.length  // 14
		
	}
}