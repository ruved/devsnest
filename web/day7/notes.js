//ans2
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

// When a property is marked as non-configurable, delete won't have any effect, and will return false. In strict mode this will raise a TypeError.
// var Employee = {};
// Object.defineProperty(Employee, 'name', {configurable: false});

// console.log(delete Employee.name);  // returns false
// var, let, and const create non-configurable properties that cannot be deleted with the delete
