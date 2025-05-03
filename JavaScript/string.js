let str = "Dishant";

console.log(str[3]);

let obj = {
    pen : "Black",
    price : 10,
};

console.log("the cost of", obj.pen , "is", obj.price);

// Template literals

let output = `The cost of ${obj.pen} is ${obj.price} rupees`;
console.log(output);

// ------------------------------------------------------------------------------------------------------------------------------------
let str1 = "dishant";
str1 = str1.toUpperCase(); // string are immutable it doesn't change our original string 
console.log(str1);
//-----------------------------------------------------------------------------------------------------------------------------------
let s = "       dishant   drugkar      ";
console.log(s.trim());

//---------------------------------------------------------------------------------------------------------------------------------
let s1 = "Dishant";
console.log(s1.slice(0,4));

//---------------------------------------------------------------------------------------------------------------------------------


// GAME ------------------------------------------------------------

let gameName = prompt("Enter your full name");

let result = "@" + gameName + gameName.length;

console.log(result);
