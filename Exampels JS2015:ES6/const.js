// variables cannot be re-assigned. Value is read-only
// Constant is not variable is a references

const foo = 'Lukasz';

foo = 'Jenny'
// TypeError: invalid assignment to const `name'

const foo = 'Jenny';
// TypeError: redeclaration of const name


/* !IMPORTANT constant inherit block scope */

{
    const foo = 'Lukasz';
    console.log(foo); // 'Lukasz'
}
console.log(foo); // ReferenceError: foo is not defined


const obj = {};
obj.file = '/files/img.jpg';

console.log(obj);

obj = 'this is file module'; // TypeError: invalid assignment to const `obj'

