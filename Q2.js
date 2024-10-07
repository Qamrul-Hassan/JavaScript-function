/* Find Largest Number.
Write a function that takes an Array of numbers and returns the largest number. */

function findLargest(arr) {
    let largest = arr[0];
    for (let i=1; i <arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest ([1, 5, 12, 8, 2, 4, 10, 6, 11]));