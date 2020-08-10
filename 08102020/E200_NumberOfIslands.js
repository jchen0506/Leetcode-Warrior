/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numberOfIslands = (grid) => {
  //edge case, when grid is empty or not given;
  if (grid === undefined || grid.length === 0) {
    return 0;
  }

  var result = 0;
  var m = grid.length;
  var n = grid[0].length;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(grid, i, j);
      }
    }
  }
  return result;
};

var dfs = (grid, r, c) => {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === '0'
  ) {
    return;
  }
  grid[r][c] = '0';
  dfs(grid, r, c + 1);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r - 1, c);
};

//test case

grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numberOfIslands(grid));
