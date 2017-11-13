// MATH 1

function zero_negativity(arr) {
	for (i=0; i<arr.length; i++) {
		if (arr[i] < 0) {
			return false;
		}
	}
	return true;
}

// MATH 2

function is_even(num) {
	if (num%2 == 0) {
		return true;
	} else {
		return false;
	}
}

// MATH 3

function how_many_even(arr) {
	count = 0;
	for (i=0; i<arr.length; i++) {
		if (arr[i]%2 == 0) {
			count+=1
		} else {
			continue;
		}
	}
	return count
}

// MATH 4

function create_dummy_array(num) {
	arr = [];
	for (i=0; i<num; i++) {
		arr.push(Math.floor(Math.random()*10))
	}
	return arr;
}

// MATH 5

function random_choice(arr) {
	var idx = Math.floor(Math.random()*arr.length);
	return arr[idx];
}