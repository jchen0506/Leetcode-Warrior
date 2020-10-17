const solution = (stringInput) => {
	let stack = []; //stringInput =' 3+ 12*5 *3 + 4*8/2+4- 5'
	let operation = '+'; // default operation will always be +
	stringInput = stringInput.replace(/\s+/g, ''); // remove all the ' ' in inputString; stringInput='3+12*5*3+4*8/2+4-5'
	let current = 0;

	for (let i = 0; i < stringInput.length; i++) {
		let curChar = stringInput[i];
		// if current character is an operation sign
		/*
    '3+12*5*3+4*8/2+4-5'
         |||
         || i stack = [3, 12]-> stack.pop() * current, push back to stack
         ||   top of stack keep track of numbers before first operation
         ||
         | current (keep track of number between 2 signs)
         |
         (operation === '*') this operation tracks the first one of pair of operations
    */
		if (!isNaN(curChar)) {
			current = current * 10 + (curChar - '0');
		} // keep increment i until find next sign, number = number *10 + current value;
		if (isNaN(curChar) || i === stringInput.length - 1) {
			// edge case for last element, otherwise it will be skiped
			if (operation === '-') {
				stack.push(-1 * current); //convert all - to + operation
			} else if (operation === '+') {
				stack.push(current); //if last operation is +, add the number to stack
			} else if (operation === '*') {
				stack.push(stack.pop() * current);
				//if last operation is *, current is the number on right hand side of *, stack.pop() is the number before * operator
			} else if (operation === '/') {
				//similar thing apply to /
				stack.push(stack.pop() / current);
			}
			//update operation to current operationo
			operation = curChar;
			current = 0; // reset current number to 0
		}
	}
	// after loop through the whole string, we get an array where all numbers can be sumed up.
	return stack.reduce((acu, cur) => {
		return acu + cur;
	}, 0);
};

//test
console.assert(
	solution(' 3+ 12*5 *3 + 4*8/2+4- 5') === 198,
	'Input string should output 198'
);
console.assert(solution('3/2') === 1, '3/2 should output 1');
