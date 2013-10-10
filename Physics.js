var Physics = {
	collision: function (p1, p2, dx, dy) {
		if (p1.x < p2.x) {
			if (p1.x + 1 < p2.x) {
				return false;
			} else if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					return false;
				} else {
					if (p1.x + 1 - p2.x <= dx) {
						p1.x = p2.x - 1;
					}
					if (p1.y + 1 - p2.y <= dy) {
						p1.y = p2.y - 1;
					}
					return true;
				}
			} else if (p1.y < p2.y + 1) {
				if (p1.x + 1 - p2.x <= dx) {
					p1.x = p2.x - 1;
				}
				if (p1.y - p2.y <= dy) {
					p1.y = p2.y + 1;
				}
				return true;
			} else {
				return false;
			}
		} else if (p1.x < p2.x + 1) {
			if (p1.y < p2.y) {
				if (p1.y + 1 < p2.y) {
					return false;
				} else {
					if (p1.x - p2.x + 1 <= dx) {
						p1.x = p2.x + 1;
					}
					if (p1.y + 1 - p2.y <= dy) {
						p1.y = p2.y - 1;
					}
					return true;
				}
			} else if (p1.y < p2.y + 1) {
				if (p1.x - p2.x + 1 <= dx) {
					p1.x = p2.x + 1;
				}
				if (p1.y - p2.y - 1 <= dy) {
					p1.y = p2.y + 1;
				}
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
};
