import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr) {
    return arr.reduce((acc, curr) => {
        // check if the current item has a type of "savoury"
        console.log(curr.type)
        if (curr.type === "savory") {
            // if yes - return acc += curr.price
            return acc += curr.price
        } else {
            // if no - return acc 
            return acc
        }
    }, 0)
}

console.log(totalSavory(shoppingCart));

