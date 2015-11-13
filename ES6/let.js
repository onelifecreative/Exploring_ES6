// what is let ? this is variable scoping

var x = 5;   // x = 5;
let y = 9;   // y = 9;

// &

var x = 5;
let x = 5  // ?

// TypeError: redeclaration of non-configurable global property x



/* add simple block scope */
{
	var x = 5;	// x = ? | 5
	let y = 8;  // y = ? | 8
}
console.log(x,y);

// x = ? | 5
// y = ? | ReferenceError: foo is not defined


/* function scope */

function exist() {

	var foo = 'Tom ';
	let boo = 'Alice ';

	function name() {
		let boo = 'Ammy ';
		console.log(foo + boo); // Tom Ammy
	}

	console.log(foo + boo); // Tom Alice
	name();
}

/* iterate */


for (let i = 0; i<4; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // i is not defined

//.vs

let i = "Danny";
function iterate(){
	for (let i = 0; i<4; i++) {
	  console.log(i); // 0, 1, 2, 3, 4
	}
}
iterate();
console.log(i); // i is not defined



// what is let ? this is variable scoping


