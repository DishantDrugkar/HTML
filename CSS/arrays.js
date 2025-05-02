// let heros = ["spiderman" , "Hulk", "Thor", "Wakanda", "shaktiman"];
// console.log(heros);


// // Looping in arrays

// for(let i=0; i<heros.length; i++){
//     console.log(heros[i]);
    
// }

// // 2 for each

// for(let hero of heros){
//     console.log(hero);
    
// }


// problem question

// let arr = [85,97,44,37,76,60];
// let sum = 0;
// let avg = 0;
// for(let i=0; i<arr.length; i++){
//      sum = sum + arr[i];
//      avg = sum / arr.length;
// }

// console.log("The average sum is : " , avg);


let items = [250, 645, 300, 900, 50];

for(let i =0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items);
