//-- String Methods = string ke upar in built functions
//* String means collection of characters |
// let name = "Aditya"; // this is a string
let name = "A" + "d" + "i" + "t" + "y" + "a"; // this is a string
console.log(name);

//? Length property = this gives the length of the string
console.log(name.length); // 6

//? ToUpperCase = returns the uppercase string from the string
console.log(name.toUpperCase()); // "ADITYA"

//? ToLowerCase = returns the lowercase string from the string
console.log(name.toLowerCase()); // "aditya"

//? CharAt = gives the character at the array index
console.log(name.charAt(3)); // index start from zero because string is like array
console.log(name[3]);

//! String is immutable
let arr = [1, 2, 3];
arr[0] = 2; // Collection ke andar ki value change kar paa rahe hai
console.log(arr);
name[0] = "R"; // This doesn't throw and error but also doesn't change the string
console.log(name);

//-- Substring = chote collection / string bade collection me se
//? Slice = gives the substring from string
console.log(name.slice(1, 4)); // Range [start is same but end ka value nahi include karega]

//? Split Method = separates the string using a substr
// name = 'A d i t y a' // separate from 'i' , ['Ad','tya']
name = "A|d|i|t|y|a"; // ['A' , 'd','i','t', 'y', 'a' ]
name = "Adity|";
// name = "Ad|ya";
name = "Aditya";
console.log(name);
console.log(name.split("it"));
console.log(name.split("")); // Separates

//? Concat method = merge two or more strings
console.log(name.concat("is", "a")); // 'Aditya'+'is'+'a' = "Adityaisa"

//? Trim Method = removes the empty space in a string
name = "       Adi tya        ";
console.log(name.trim().length); // 7 | name.trim()=> 'Adi tya'

//? Index of method = index dega string ka
name = "Aditya is";
console.log(name.indexOf("A")); // 0
console.log(name.indexOf("d")); // 1
console.log(name.indexOf("Ad")); // 0
console.log(name.indexOf("it")); // 2
console.log(name.indexOf("is")); // 7

//? Replace Method = string ko replace karega
name = "Aditya Aditya";
console.log(name.replace("ya", "i")); // 'Aditya', 'ya' , 'i' =>'Aditi' | this will only replace once
console.log(name.replaceAll("ya", "i")); // 'Aditi Aditi' | | this will replace all occurence
console.log(name); //! All the methods will not change the original value

// | Escape characters = kisi character ko escape = \
let message = 'Hi im "Aditya"'; // Hi im "Aditya"
message = " hi im ' aditya '"; // array ka start [ , array ka end ]
let str = '"'; // '"'
console.log(str.length);
console.log(message);

// | Includes method =  pure string ko search karega chote string ke liye | agar usko mila to true nahi to false
message = "Hi im Aditya"; //
console.log(message.includes("Aditya")); // true
console.log(message.length);
console.log(message.slice(message.length)); // message = 'Hi im Aditya'

name = "Aditya";
console.log(name.slice(1)); // "ditya"
console.log(name.slice(0, 3)); // "Adi"
