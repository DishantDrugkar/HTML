// function sum (x, y){
//      add = x + y;
//      return add;
// }

// console.log(sum(3,5));

// // Arrow Function

// const arrowSum = (a,b) => {
//     console.log(a + b);
// }


// question countVowel

function countVowel (str){
    let count = 0;
   for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
       count++;
    }
   }
   console.log(count);
   
}


const vowel = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}