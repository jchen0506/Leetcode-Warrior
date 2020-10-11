let maxthing = 3;
let maxcolor = 2;
let colors = [2, 2, 1];

var zerocolors = function (maxthing, maxcolor, colors) {
  var sum = colors.reduce((a, b) => a + b, 0);
  let goal = 0 - sum;
  let counter = 0;
  while (goal !== 0) {
    if (goal > 0) {
      goal -= maxcolor;
      counter++;
      if (goal <= 0) break;
    }
    if (goal < 0) {
      goal += maxcolor;
      counter++;
      if (goal >= 0) break;
    }
  }
  return counter;
};

console.log(zerocolors(maxthing, maxcolor, colors));
