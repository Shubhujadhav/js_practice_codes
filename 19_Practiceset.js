// | Write a function which takes a takes and returns the uppercase of first letter and normal remaining
// function("aditya")=>"Aditya" | toUpperCase
// function("rahul")=>"Rahul"

function changeToUpperCase(string) /* 'aditya' = ['a','d','i','t','y','a'] */ {
  let first_Word = string[0]; // 'a'
  let remaining = string.slice(1);
  return first_Word.toUpperCase() + remaining; // 'A' + 'ditya'
}
let capitalizeUserName = changeToUpperCase("rahul");
console.log(capitalizeUserName);
