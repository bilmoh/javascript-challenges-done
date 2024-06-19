import podcasts from "./data.js";

/* Welcome Aboard Gatwick Airlines 

Our Gatwick Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Gatwick Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

function sortByDuration(data, flightLength) {
    data.sort((a, b) => {
        // Check if the flight is greater than 60mins 
        if (flightLength > 60) {
            // if yes, sort decending order (longest to shortest)
            data.sort((a, b) => b.duration - a.duration)
        } else {
            data.sort((a, b) => a.duration - b.duration)
        }
        // if no, sort ascending order (shortest to longest)
        // loop through my sorted array 
        data.forEach(({ title, duration }, index) => {
            console.log(`${index + 1}, ${title}, ${duration} minutes`)
        })
        // construct a string using the title and duration props
        // use the index to number the list
        // console.log each item
    })
}

sortByDuration(podcasts, 60);
