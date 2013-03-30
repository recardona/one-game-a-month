/**
 * A Plane is a {jaws.Sprite} displayed on screen.
 * It shoots stuff, but the shooting doesn't happen here.
 * @param {Object} x the x Coordinate of this Plane
 * @param {Object} y the y Coordinate of this Plane
 */
function Plane(x, y) {

	//creates an internal Sprite, anchored by the center (meaning that all manipulations)
	//that relate to this Sprite's coordinates are done with respect to the center of this
	//Sprite.
	this.sprite = new jaws.Sprite({
		image : "./assets/art/plane.png",
		anchor : "center",
		x : x,
		y : y
	});

	//can the plane fire bullets?
	this.can_fire = true;

	this.update = function() {
		//do nothing, since we're responding directly to player input.
	}

	this.draw = function() {
		this.sprite.draw();
	}
}