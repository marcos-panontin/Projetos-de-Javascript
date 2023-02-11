const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names
const names = characters.map((character)=> character.name)
console.log(names)
// Get an array of all heights
const heights = characters.map((character)=> character.height);
console.log(heights)
// Get an array of objects with just name and height properties
const minifiedRecords = characters.map(function(character){
    return ({name: character.name, height: character.height})
})
console.log(minifiedRecords)
// Get an array of all first names
const firstNames = characters.map(function(character){
     return character.name.split(' ')[0]
})
console.log(firstNames)
// REDUCE
const totalMass = characters.reduce(function(total, character){return total + character.height}, 0)
console.log(totalMass)
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
const heavierThan100 = characters.filter(function(character){
    return character.mass > 100
})
console.log(heavierThan100)
// Get characters with height less than 200
const smallerThan200 = characters.filter(function(character){
    return character.height < 200
})
console.log(smallerThan200)
// Get all male characters
const maleCharacters = characters.filter(function(character){
    return character.gender === "male"
})
console.log(maleCharacters)
// Get all female characters
const femaleCharacters = characters.filter(function(character){
    return character.gender === "female"
})
console.log(femaleCharacters)
// SORT
// Sort by name
const sortedByNameCharacters = characters.sort()
console.log(sortedByNameCharacters)
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?