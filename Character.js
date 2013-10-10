function Character(level, tileset) {
	Element.call(this, 'playerborn', level, tileset);

	var position = this.getPosition();

	var velocity = {
		x: 0,
		y: 0
	};

	var acceleration = 75;

	this.tick = function (dt) {
		dt /= 1000;
		position.x += velocity.x * dt;
		position.y += velocity.y * dt + acceleration * dt * dt / 2;
		velocity.y += acceleration * dt;
	};

	// TODO state machine
}
