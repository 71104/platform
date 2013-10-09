function Character(level, tileset) {
	Element.call(this, 'playerborn', level, tileset);

	var position = this.getPosition();

	var velocity = {
		x: 0,
		y: 0
	};

	var acceleration = 40;

	this.tick = function (dt) {
		dt /= 1000;
		velocity.y += acceleration * dt;
		position.x += velocity.x * dt;
		position.y += velocity.y * dt + acceleration * Math.pow(dt, 2);
	};
}
