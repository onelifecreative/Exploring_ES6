/**
 * [define function parametr old way ES5/ new way ES6]
 * ES6
 */

/* Old Way ES5 */
function foo(first,callback) {
	first = 200;
	callback = callback || function(){};
}

/* New Way ES6 */
function foo(first=200,callback=function(){}) {
	/* function execution */
}

function boo({first = 1, second, third = true}) {
	console.log(first); // 1
	console.log(third); // 'true'
}

/* if you have add options use... */
function foo({first=10, second=true} = {}) {

}
/* if you have add options use... */
function boo({first="10", second="true"}) {

}








