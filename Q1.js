/* 1. Sum of array
Write a function that tskes an array of numbers and returns the sum of those numbers. */

function sumArray(arr) {
    let sum= 0;
    for (let i =0 ; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));