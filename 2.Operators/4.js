// Toán tử 3 ngôi
let number = -10;

// Basic Example
//              condition ? exprIfTrue : exprIfFalse
let message = number >= 0 ? "Số dương" : "Số âm";
console.log(message); // so am

// Nếu sử dụng if else thông thường
if (number >= 0) {
	console.log("Số dương");
} else {
	console.log("Số âm");
}

let number2 = 10;
console.log(number2 % 2 === 0); // True (Truthy Value)
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(message2); // So chan

// Handling null values
// const myFunction = (a, b) => a * b;
const greeting = (person) => {
	const name = person ? person.name : "stranger";
	return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"

/*
- condition
An expression whose value is used as a condition.

- exprIfTrue
An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).

- exprIfFalse
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).
*/
