function Tileset(level, index, atlas) {
	var descriptor = level.tilesets[index];
	var columns = descriptor.imagewidth / descriptor.tilewidth;

	this.drawTile = function (context, index, x, y) {
		if (--index) {
			context.drawImage(
				atlas,
				(index % columns) * descriptor.tilewidth,
				Math.floor(index / columns) * descriptor.tileheight,
				descriptor.tilewidth,
				descriptor.tileheight,
				x * descriptor.tilewidth,
				y * descriptor.tileheight,
				descriptor.tilewidth,
				descriptor.tileheight
				);
		}
	};
}
