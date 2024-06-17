/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr) {
    return [...new Set(arr)]
}


// function removeDupesFromArray(arr) {
//     //create a new object to keep track of duplicates
//     const trackDupes = {}
//     // use filter to loop through each item in the arr
//     return arr.filter(item => {
//         // for each item in arr
//         // look up the item in the lookup table 
//         if (!trackDupes[item]) {
//             // if the item does NOT exisit in the lookup, add it and return true
//             trackDupes[item] = true
//             return true
//         }
//         // return false
//         return false
//     })
// }

//1st Way - Look through the whole list
// Wouldn't be a problem for a small amount of lists but if it's a large it will cause constraint

// function removeDupesFromArray(arr) {
//     // create a new arr to hold unique items
//     const uniqueItems = []

//     // for each item in recipe arr 
//     arr.forEach(item => {
//         // if the item is NOT yet in the unique arr, push it in
//         if (!uniqueItems.includes(item)) {
//             uniqueItems.push()
//         }
//         // if the item is in the unique arr, move on to the next item (do nothing)
//     })
//     // return the unique arr 
//     return uniqueItems
// }

console.log(removeDupesFromArray(eggScrambleRecipe));