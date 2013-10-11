function SolidMap(level) {
	var solidLayer = level.layers[3];

	function tileAt(x, y) {
		return !!solidLayer.data[y * solidLayer.width + x];
	}

	var tile = {
		x: 0,
		y: 0
	};
	var result = {
		x: false,
		y: false
	};

	this.tileCollision = function (entity, dx, dy) {
		result.x = false;
		result.y = false;

		function tileCollision(x, y, dx, dy, result) {
			if (tileAt(x, y)) {
				tile.x = x;
				tile.y = y;
				var collisions = Physics.collision(entity, tile, dx, dy);
				result.x |= collisions.x;
				result.y |= collisions.y;
			}
		}

		var x = Math.floor(entity.x);
		var y = Math.floor(entity.y);
		tileCollision(x, y, dx, dy, result);
		tileCollision(x, y + 1, dx, dy, result);
		tileCollision(x + 1, y, dx, dy, result);
		tileCollision(x + 1, y + 1, dx, dy, result);

		return result;
	};
}
