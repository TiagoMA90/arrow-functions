/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(2, 6);
console.log(sum);


// Arrow Function With Parameters
const addThreeNumbers = (a, b, c) => {
    return a + b + c;
}

let plus = addThreeNumbers(1, 5, 2);
console.log(plus)


// Single Line Arrow Function With Parameters
const addFourNumbers = (a, b, c, d) => a + b + c + d;
let addition = addFourNumbers(2, 2, 2, 2)
console.log(addition)


// Implicit Returns
const saySomething = message => console.log(message)
saySomething("Hello World!")

const sayHello = () => console.log("Hello")
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () =>   (
    `<p>
        This is a multiline strong!
    </p>`
)

console.log(returnMultipleLines());