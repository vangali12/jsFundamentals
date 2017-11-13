let students = [
	{name: "Remy", cohort: 'Jan'},
	{name: "Genevieve", cohort: 'March'},
	{name: "Chuck", cohort: 'Jan'},
	{name: "Osmund", cohort: 'June'},
	{name: "Nikki", cohort: 'June'},
	{name: "Boris", cohort: 'June'}
];

function printNames(arr) {
	for (i=0; i<arr.length; i++) {
		for (let info in arr[i]) {
			console.log(info + ": " + arr[i][info]);
		}
	}
}

// printNames(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function printList(obj) {
	for (people in obj) {
		console.log(people.toUpperCase());
		for (i=0; i<obj[people].length; i++) {
			nameLength = obj[people][i]['first_name'].length + obj[people][i]['last_name'].length;
			console.log((i+1) + " - " + obj[people][i]['last_name'].toUpperCase() + ", " + obj[people][i]['first_name'].toUpperCase() + " - " + nameLength);
		}
	}

		// 	console.log(i)
			// for (info in people) {
			// 	console.log(people[last_name].toUpperCase())
		// 	}
		// }
	// }

}

printList(users)