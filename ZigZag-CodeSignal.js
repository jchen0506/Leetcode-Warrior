/*
Let's say a triple <a, b, c> is a zigzag if either a < b > c or a > b < c
Given an array of integers numbers, your task is to check all the triples of its consecutive elemements for being a zigzag. More formally, you tasks is to construct an array of length numbers.length-2, where the ith element of the output array equals 1 if the triple ( number[i], numbers[i+1], numbers[i+2]) is a zigzag and 0 other wise

Example
numbers=[1, 2, 1, 3, 4], the output should be isZigzag(numbers) = [1, 1, 0]
*/

const isZigzag = function (numbers) {
  var result = [];
  if (numbers.length < 3) return [0];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (
      (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) ||
      (numbers[i] > numbers[i + 1] && numbers[i + 1] > numbers[i + 2])
    ) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  return result;
};
let numbers1 = [1, 2, 1, 3, 4];
console.log(isZigzag(numbers1));
let numbers2 = [1, 2, 3, 4];
console.log(isZigzag(numbers2));
let numbers3 = [1];
console.log(isZigzag(numbers3));
