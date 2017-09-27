const initialGrid = [];
for (let i = 0; i < 15; i++) {
    initialGrid.push([]);
}
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 25; j++) {
        initialGrid[i].push('grey');
    }
}

export default {
    fieldWidth: 300,
    fieldHeight: 660,
    blockUnit: 30,
    shapesMapping: [
        'straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake',
    ],
    tetrominos: {
		straight: {
			shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'red',
		},
		square: {
			shape: [
				[1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#00BCD4',
		},
		cross: {
			shape: [
				[0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'green',
		},
		leftGun: {
			shape: [
				[0, 0, 1, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'orange',
		},
		rightGun: {
			shape: [
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'yellow',
		},
		leftSnake: {
			shape: [
				[1, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'purple',
		},
		rightSnake: {
			shape: [
				[0, 1, 1, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'brown',
		},
	},
    initialGrid,
};
