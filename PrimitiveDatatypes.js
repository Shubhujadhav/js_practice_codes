// Primitive data types
// number
// string
// undefined
// boolean
// null
// symbol
// bigint

// -- Dynamic Programming = datatype ka koi error nahi rahega | koi bhi value kisi me bhi rakh sakte hai

console.log(18.877489464); // number
console.log("Hello,World!"); // string
console.log(true, false); // booleans
console.log(414154185487454487445748484874478484n); // bigint | Big Integers
console.log(Symbol()); // unique symbol

let name; // empty because of js
let age = null;
// Undefined = automatically empty , null = Explicitly empty
console.log(undefined); // undefined
console.log(null); // null
let obj = {
  a: null,
  b: 19,
};
console.log(obj.a);

let a = "1" // string
console.log(typeof Number(a))
// Collections
// -- objects | key values
// -- array | serialized values
