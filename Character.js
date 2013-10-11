function Character(level, tileset) {
	Element.call(this, 'playerborn', level, tileset);

	var position = this.getPosition();

	var velocity = {
		x: 0,
		y: 0
	};

	var acceleration = 75;

	var solidMap = new SolidMap(level);

	this.tick = function (dt) {
		dt /= 1000;

		var dx = velocity.x * dt;
		var dy = velocity.y * dt + acceleration * dt * dt / 2;
		position.x += dx;
		position.y += dy;
		velocity.y += acceleration * dt;

		var collisions = solidMap.tileCollision(position, dx, dy);
		if (collisions.x) {
			velocity.x = 0;
		}
		if (collisions.y) {
			velocity.y = 0;
		}
	};

	// TODO state machine
}
