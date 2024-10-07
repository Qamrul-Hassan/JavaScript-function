/* 5. FizzBuzz
Write a function that prints numbers from 1 to 100 . But for multiples of 3, print 
"Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that
are multiples of both 3 and 5, print "FizBuz". */

function fizzBuzz () {
    for(let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
            }else if (i % 5 === 0){
                console.log(i % 5 === 0);
        }
    }
}

fizzBuzz();