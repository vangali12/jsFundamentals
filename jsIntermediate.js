//  PART 1

// function starString(num){
// 	newStr = "";
// 	for (i=0; i<num; i++){
// 		newStr += "*"
// 	}
// 	console.log(newStr);
// }

// let stars = dtarString(8)

// PART 2

// function drawStars(arr) {
// 	for (i=0; i<arr.length; i++) {
// 		newStr = "";
// 		for (j=0; j<arr[i]; j++) {
// 			newStr += "*";
// 		}
// 		console.log(newStr);
// 	}
// }

// let x = [4, 6, 1, 3, 5, 7, 25];
// drawStars(x);

// PART 3

function drawStars(arr) {
	for (i=0; i<arr.length; i++) {
		newStr = "";
		if (typeof arr[i] == 'string') {
			for (j=0; j<arr[i].length; j++) {
				newStr += arr[i][0].toLowerCase();
			}
			console.log(newStr);
		} else {
			for (j=0; j<arr[i]; j++) {
				newStr += "*"
			}
			console.log(newStr);
		}
	}
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStars(x);