// BASIC 1

var x = [];
console.log(x);
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x);

 // The result is ['coding', 'dojo']

// BASIC 2

 const y = [];
 console.log(y);
 y.push(88);
 console.log(y);

 // The result is [88]

// BASIC 3

var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (i=0; i < z.length; i++) {
	console.log(z[i])
}

// Each element printed on its own line

for (i=0; i < z.length-1; i++) {
	console.log(z[i])
}

// Each element printed except the last value

// BASIC 4

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

for (i=0; i<names.length; i++) {
	console.log(names[i].length);
}

for (i=0; i<names.length; i++) {
	if (names[i].length == 5) {
		console.log(names[i]);
	} else {
		continue;
	}
}

// BASIC 5

function yell(str) {
	console.log(str.toUpperCase());
}

yell('Hello World');

// Find the documentation online by googling it.