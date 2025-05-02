// for(let num = 0; num = 100; num++){
//     if(num % 2 == 0){
//         console.log("num", num);
        
//     }
// }

let gameNum = 25;

let userNum = prompt("Guess the number !!");

while(gameNum != userNum){
  userNum =  prompt("You have entered wrong number please guess again");
};

console.log("Congrulations buddy");
