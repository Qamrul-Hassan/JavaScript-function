/* 4. Palindrom Check
Write a function that checks if a string is palindrome (a world that reads the same backwards as frword).*/

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"));