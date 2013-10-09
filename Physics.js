var Physics = new (function () {
	var epsilon = 0.001;

	this.clamp = function (x1, y1, r1, x2, y2, r2, v) {
		var x = x2 - x1 + v.x;
		var y = y2 - y1 + v.y;
		var r = r1 + r2;
		if ((x >= 0) && (x < r)) {
			if ((y >= 0) && (y < r)) {
				if (y > x) {
					y2 = y1 + r + epsilon;
					v.y = 0;
					return true;
				} else {
					x2 = x1 + r + epsilon;
					v.x = 0;
					return true;
				}
			} else if ((y < 0) && (y > -r)) {
				if (-y > x) {
					y2 = y1 - r - epsilon;
					v.y = 0;
					return true;
				} else {
					x2 = x1 + r + epsilon;
					v.x = 0;
					return true;
				}
			} else {
				return false;
			}
		} else if ((x < 0) && (x > -r)) {
			if ((y >= 0) && (y < r)) {
				if (y > -x) {
					y2 = y1 + r + epsilon;
					v.y = 0;
					return true;
				} else {
					x2 = x1 - r - epsilon;
					v.x = 0;
					return true;
				}
			} else if ((y < 0) && (y > -r)) {
				if (-y > -x) {
					y2 = y1 - r - epsilon;
					v.y = 0;
					return true;
				} else {
					x2 = x1 - r - epsilon;
					v.x = 0;
					return true;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
})();
