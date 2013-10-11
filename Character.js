function Character(level, tileset) {
	Element.call(this, 'playerborn', level, tileset);

	var position = this.getPosition();

	var velocity = {
		x: 0,
		y: 0
	};

	var acceleration = 75;

	var solidMap = new SolidMap(level);

	this.tick = function (dt) {
		dt /= 1000;

		var dx = velocity.x * dt;
		var dy = velocity.y * dt + acceleration * dt * dt / 2;
		position.x += dx;
		position.y += dy;
		velocity.y += acceleration * dt;

		var collisions = solidMap.tileCollision(position, dx, dy);
		if (collisions.x) {
			velocity.x = 0;
		}
		if (collisions.y) {
			velocity.y = 0;
		}
	};

	var walkVelocity = 6;
	var jumpVelocity = 24;

	var states = {
		still: {
			startLeft: function () {
				velocity.x = -walkVelocity;
				return states.left;
			},
			stopLeft: function () {
				velocity.x = walkVelocity;
				return states.right;
			},
			startRight: function () {
				velocity.x = walkVelocity;
				return states.right;
			},
			stopRight: function () {
				velocity.x = -walkVelocity;
				return states.left;
			}
		},
		left: {
			startLeft: function () {
				return states.left;
			},
			stopLeft: function () {
				velocity.x = 0;
				return states.still;
			},
			startRight: function () {
				velocity.x = 0;
				return states.still;
			},
			stopRight: function () {
				return states.left;
			}
		},
		right: {
			startLeft: function () {
				velocity.x = 0;
				return states.still;
			},
			stopLeft: function () {
				return states.right;
			},
			startRight: function () {
				return states.right;
			},
			stopRight: function () {
				velocity.x = 0;
				return states.still;
			}
		}
	};

	var currentState = states.still;

	this.startLeft = function () {
		currentState = currentState.startLeft();
	};

	this.stopLeft = function () {
		currentState = currentState.stopLeft();
	};

	this.startRight = function () {
		currentState = currentState.startRight();
	};

	this.stopRight = function () {
		currentState = currentState.stopRight();
	};

	this.jump = function () {
		velocity.y = -jumpVelocity;
	};
}
