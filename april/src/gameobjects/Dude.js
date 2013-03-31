/**
 * The dude.
 * @param {Object} x the starting x coordinate for this Dude
 * @param {Object} y the starting y coordinate for this Dude
 */
function Dude(x, y) {

	var dude_sprite_sheet = new jaws.Animation({
		sprite_sheet : "./assets/art/charzera_0_firstRow.png",
		frame_size : [25, 45],
		loop : true
	});

	/* Sprite attributes */
	this.facingLeft = false;
	
	//slices 0-7
	this.anim_walk = dude_sprite_sheet.slice(0, 8);
	
	this.sprite = new jaws.Sprite({
		x : x,
		y : y,
		anchor : "center",
		scale : 1.0
	});
	this.sprite.setImage(this.anim_walk.next);
	
	

	/* Game logic attributes */
	this.can_fire = false;

	this.update = function() {
		
	}

	this.draw = function() {
		this.sprite.draw();
	}
}