var Physics = new (function () {
	var result = {
		x: false,
		y: false
	};
	this.collision = function (p1, p2, dx, dy) {
		if (p1.x < p2.x) {
			if (p1.x + 1 < p2.x) {
				result.x = false;
				result.y = false;
				return result;
			} else if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					result.x = false;
					result.y = false;
					return result;
				} else {
					result.x = false;
					result.y = false;
					if (p1.x + 1 <= dx + p2.x) {
						p1.x = p2.x - 1;
						result.x = true;
					}
					if (p1.y + 1 <= dy + p2.y) {
						p1.y = p2.y - 1;
						result.y = true;
					}
					return result;
				}
			} else if (p1.y < p2.y + 1) {
				result.x = false;
				result.y = false;
				if (p1.x + 1 <= dx + p2.x) {
					p1.x = p2.x - 1;
					result.x = true;
				}
				if (p1.y + 1 <= dy + p2.y) {
					p1.y = p2.y + 1;
					result.y = true;
				}
				return result;
			} else {
				result.x = false;
				result.y = false;
				return result;
			}
		} else if (p1.x < p2.x + 1) {
			if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					result.x = false;
					result.y = false;
					return result;
				} else {
					result.x = false;
					result.y = false;
					if (p1.x + 1 <= dx + p2.x) {
						p1.x = p2.x + 1;
						result.x = true;
					}
					if (p1.y + 1 <= dy + p2.y) {
						p1.y = p2.y - 1;
						result.y = true;
					}
					return result;
				}
			} else if (p1.y < p2.y + 1) {
				result.x = false;
				result.y = false;
				if (p1.x + 1 <= dx + p2.x) {
					p1.x = p2.x + 1;
					result.x = true;
				}
				if (p1.y + 1 <= dy + p2.y) {
					p1.y = p2.y + 1;
					result.y = true;
				}
				return result;
			} else {
				result.x = false;
				result.y = false;
				return result;
			}
		} else {
			result.x = false;
			result.y = false;
			return result;
		}
	};
})();
