/* Reverse String
Write a function that takes a string and returns if reversed. */

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));