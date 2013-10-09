function Element(name, level, tileset) {
	var descriptor = (function () {
		for (var i in level.layers[4].objects) {
			if (level.layers[4].objects[i].name === name) {
				return level.layers[4].objects[i];
			}
		}
	})();

	var position = {
		x: descriptor.x / level.tilewidth,
		y: descriptor.y / level.tileheight
	};

	this.getPosition = function () {
		return position;
	};

	this.draw = function (context) {
		tileset.drawTile(context, descriptor.gid, position.x, position.y);
	};
}
