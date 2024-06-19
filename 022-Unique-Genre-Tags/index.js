import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

// Methods 1 - 
// function getUniqueTags(data) {
//     // use map to loop through the data and get a new array of tags 
//     const tags = data.map(shows => shows.tags).flat()

//     // flatten the tags array with .flat()
//     // creare a new array uniqueTags to hold the unique values 
//     const uniqueTags = []

//     // loop through the tags array
//     tags.forEach(tag => {
//         // is the element already in that uniqueTags arr
//         if (!uniqueTags.includes(tag)) {
//             // no: push into arr
//             uniqueTags.push(tag)
//         }
//         // yes: keep going
//     })

//     //return uniqueTags arr
//     return uniqueTags
// }

//method 2
function getUniqueTags(data) {
    const tags = data.map(genre => genre.tags).flat()
    const uniqueTags = {}

    // filter tags arr
    return tags.filter(tag => {
        // look up the tags in the uniqueTags obj
        if (!uniqueTags[tag]) {
            uniqueTags[tag] = true
            // if it's not then we have a unique item
            // put the item in our object with a value of true
            return true
        }
        return false
    })




}

console.log(getUniqueTags(mediaData));

