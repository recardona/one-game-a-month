/**
 * This is what the Plane (@see Plane.js) shoots.
 * @param {Object} x the starting x coordinate for this Bullet
 * @param {Object} y the starting y coordinate for this Bullet
 */
function Bullet(x, y) {
	this.x = x;
	this.y = y;

	this.update = function() {
		this.x += 4;
		//upon firing, keep moving toward the right
	}

	this.draw = function() {
		jaws.context.drawImage(jaws.assets.get("./assets/art/bullet.png"), this.x, this.y);
	}
}