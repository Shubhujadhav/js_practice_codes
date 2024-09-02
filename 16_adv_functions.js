let a = 2;
let add = (num) /* parameters */ => {
  //   console.log(a + 2); // console.log(2+2)
  console.log(num); // agar function me input pass nahi kiya par woh expect kar raha hai to woh value undefined ho jayegi
  return num + 2;
};

add([1, 2, 3]);
console.log(add); // 2
// variable = value
// function = definition | kya input le raha hai , kya andar work kar raha hai and kya return kar raha hai
console.log(add());
let sum = add(2); // 4

// Return matlab output | parameter matlab input
let numSqr = (number) => {
  return number * number;
};
console.log(numSqr(13)); //169

//? Practice Set | input me array aur andar ka maximum value kiska hai
// [1, 2, 3, 4, 5] => 5
// [12, 2, 13, 4, 5] => 13
