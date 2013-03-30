/**
 * This is what the Plane (@see Plane.js) shoots.
 * @param {Object} x the starting x coordinate for this Bullet
 * @param {Object} y the starting y coordinate for this Bullet
 */
function FAP(x, y) {
	this.x = x;
	this.y = y;

	this.update = function() {
		this.x += 4;
		//upon firing, keep moving toward the right
	}

	this.draw = function() {
			jaws.context.font = "bold 10pt terminal";
			jaws.context.lineWidth = 2
			jaws.context.fillStyle = "Red"
			jaws.context.strokeStyle = "rgba(200,200,200,0.0)"
			jaws.context.fillText("FAP", this.x, this.y)
	}
}