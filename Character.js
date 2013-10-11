function Character(level, tileset) {
	Element.call(this, 'playerborn', level, tileset);

	var position = this.getPosition();

	var velocity = {
		x: 0,
		y: 0
	};

	var acceleration = 75;

	function solidAt(x, y) {
		return !!level.layers[3].data[y * level.layers[3].width + x];
	}

	var tile = {
		x: 0,
		y: 0
	};

	function tileCollision(x, y, dx, dy) {
		if (solidAt(x, y)) {
			tile.x = x;
			tile.y = y;
			var collisions = Physics.collision(position, tile, dx, dy);
			if (collisions.x) {
				velocity.x = 0;
			}
			if (collisions.y) {
				velocity.y = 0;
			}
		} else {
			return false;
		}
	}

	this.tick = function (dt) {
		dt /= 1000;
		var dx = velocity.x * dt;
		var dy = velocity.y * dt + acceleration * dt * dt / 2;
		position.x += dx;
		position.y += dy;
		velocity.y += acceleration * dt;

		var x = Math.floor(position.x);
		var y = Math.floor(position.y);
		tileCollision(x, y, dx, dy);
		tileCollision(x, y + 1, dx, dy);
		tileCollision(x + 1, y, dx, dy);
		tileCollision(x + 1, y + 1, dx, dy);
	};

	// TODO state machine
}
