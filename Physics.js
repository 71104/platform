var Physics = {
	collision: function (p1, p2, dx, dy) {
		if (p1.x < p2.x) {
			if (p1.x + 1 < p2.x) {
				return {
					x: false,
					y: false
				};
			} else if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					return {
						x: false,
						y: false
					};
				} else {
					var result = {
						x: false,
						y: false
					};
					if (p1.x + 1 - p2.x <= dx) {
						p1.x = p2.x - 1;
						result.x = true;
					}
					if (p1.y + 1 - p2.y <= dy) {
						p1.y = p2.y - 1;
						result.y = true;
					}
					return result;
				}
			} else if (p1.y < p2.y + 1) {
				var result = {
					x: false,
					y: false
				};
				if (p1.x + 1 - p2.x <= dx) {
					p1.x = p2.x - 1;
					result.x = true;
				}
				if (p1.y - p2.y <= dy) {
					p1.y = p2.y + 1;
					result.y = true;
				}
				return result;
			} else {
				return {
					x: false,
					y: false
				};
			}
		} else if (p1.x < p2.x + 1) {
			if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					return {
						x: false,
						y: false
					};
				} else {
					var result = {
						x: false,
						y: false
					};
					if (p1.x - p2.x + 1 <= dx) {
						p1.x = p2.x + 1;
						result.x = true;
					}
					if (p1.y + 1 - p2.y <= dy) {
						p1.y = p2.y - 1;
						result.y = true;
					}
					return result;
				}
			} else if (p1.y < p2.y + 1) {
				var result = {
					x: false,
					y: false
				};
				if (p1.x - p2.x + 1 <= dx) {
					p1.x = p2.x + 1;
					result.x = true;
				}
				if (p1.y - p2.y - 1 <= dy) {
					p1.y = p2.y + 1;
					result.y = true;
				}
				return result;
			} else {
				return {
					x: false,
					y: false
				};
			}
		} else {
			return {
				x: false,
				y: false
			};
		}
	}
};
