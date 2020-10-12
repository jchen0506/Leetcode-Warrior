var solve = function (board, startx, starty) {
	let dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let res = [];
	let queue = [];
	queue.push([startx, starty, 0]);

	while (queue.length > 0) {
		let cell = queue.shift();
		let curx = cell[0];
		let cury = cell[1];
		let curdis = cell[2];
		board[curx][cury] = '+';

		for (let dir of dirs) {
			let newx = curx + dir[0];
			let newy = cury + dir[1];
			if (inBound(newx, newy, board)) {
				if (isExit(newx, newy, board)) {
					res.push([newx, newy, curdis + 1]);
				}
				queue.push([newx, newy, curdis + 1]);
			}
		}
	}
	if (res.length === 0) return [-1, -1];
	res.sort((a, b) => {
		if (a[2] === b[2]) {
			if (a[0] === b[0]) {
				return a[1] - b[1];
			} else {
				return a[0] - b[0];
			}
		} else {
			return a[2] - b[2];
		}
	});
	console.log(res);
	return res[0];
};

var isExit = function (x, y, board) {
	let m = board.length;
	let n = board[0].length;
	if (x === 0 || y === 0 || x === m - 1 || y === n - 1) {
		if (board[x][y] === 0) {
			return true;
		}
	}
	return false;
};

var inBound = function (x, y, board) {
	let m = board.length;
	let n = board[0].length;
	if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] !== '+') {
		return true;
	}
	return false;
};

//test case

var board = [
	['+', '+', '+', '+', '+', '+', '+', 0, 0],
	['+', '+', 0, 0, 0, 0, 0, '+', '+'],
	[0, 0, 0, 0, 0, '+', '+', 0, '+'],
	['+', '+', 0, '+', '+', '+', '+', 0, 0],
	['+', '+', 0, 0, 0, 0, 0, 0, '+'],
	['+', '+', 0, '+', '+', 0, '+', 0, '+'],
];

// console.log('start 1 result: ' + solve(board, 2, 0)); //5,2
console.log('start 2 result: ' + solve(board, 5, 2)); //2,0
