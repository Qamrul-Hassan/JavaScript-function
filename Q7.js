/* Count vowel in a string
Write a function that the number of vowels (a, e, i, o, u) in a given string. */

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));