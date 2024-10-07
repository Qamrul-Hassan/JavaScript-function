/* Check Prime Number
Write a function to check if a given number is prime */

function isPrime(num){
    if (num < 2)return false;
    for (let i =2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));