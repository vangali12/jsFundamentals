// function magic_multiply(x, y) {

// 	return x;
// }

// TEST 1

// function magic_multiply(x, y) {
// 	x = x * y;
// 	return x;
// }

// let test1 = magic_multiply(5, 2);
// console.log(test1);

// TEST 2

// function magic_multiply(x, y) {
// 	x = x * y;
// 	return x;
// }

// let test2 = magic_multiply(0, 0);
// console.log(test2);

// TEST 3

// function magic_multiply(x, y) {
// 	if (typeof x == 'number') {
// 		x = x * y;
// 	} else if (typeof x == 'object') {
// 		arr = [];
// 		for (i=0; i<x.length; i++) {
// 			arr.push(x[i] * y);
// 		}
// 		x = arr;
// 	}
// 	return x;
// }

// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// TEST 4

// function magic_multiply(x, y) {
// 	if (typeof x == 'object' || typeof y == 'object') {
// 		arr = [];
// 		for (i=0; i<x.length; i++) {
// 			arr.push(x[i] * y);
// 		}
// 		x = arr;
// 	} else if (typeof x == 'string' || typeof y == 'string') {
// 		x = "Error: Can not multiply by string"
// 	} else {
// 		x = x * y;
// 	}
// 	return x;
// }

// let test4 = magic_multiply(7, "three");
// console.log(test4);

// TEST 5

function magic_multiply(x, y) {
	if (typeof x == 'object' || typeof y == 'object') {
		arr = [];
		for (i=0; i<x.length; i++) {
			arr.push(x[i] * y);
		}
		x = arr;
	} else if (typeof y == 'string') {
		x = "Error: Can not multiply by string"
	} else if (typeof x == 'string' && typeof y == 'number') {
		newStr = "";
		for (i=0; i<y; i++) {
			newStr += x;
		}
		x = newStr
	} else {
		x = x * y;
	}
	return x;
}

let test5 = magic_multiply("Brendo", 4);
console.log(test5);