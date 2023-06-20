// // Code your solutions in this file

// //for (let age =30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// //const gift = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i=0; i< gifts,length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
// }

let thankPeople = ["Guadalupe", "Ollie", "Aki"]


function writeCards(thankPeople){
    let emptyArray = []
    for (let i=0; i <thankPeople.length; i++){
        emptyArray.push(`Thank you, ${thankPeople[i]}, for the wonderful surprise gift!`)   
    }
     return emptyArray;
}
console.log(writeCards())

let counter
function countDown(counter){
    while (counter >= 0){
        console.log(counter)
        counter--
    }
}
countDown(10)