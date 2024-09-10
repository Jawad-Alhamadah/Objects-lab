
// Lab -2
const characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];


let firstBlueEyes = characters.find(character => character.eye_color === "blue")

console.log("first blue eyes");
console.log(firstBlueEyes.name);


let firstGenderOver50 = characters.find(character => character.mass > 50)

console.log("first gender over 50 mass");
console.log(firstBlueEyes.gender);

console.log("height less than 200")
console.log(characters.filter(character => character.height < 200))

console.log("all males")
console.log(characters.filter(character => character.gender === "male"))

console.log("all names")
console.log(characters.map(character => character.name))

console.log("all heights")
console.log(characters.map(character => character.height))



console.log("sort by mass")
console.log(characters.sort((prev_character, character) => prev_character.mass - character.mass))

console.log("sort by height")
console.log(characters.sort((prev_character, character) => character.height - prev_character.height))



console.log("does everyone has mass more than 40?")
console.log(characters.every(character => character.mass > 40))


console.log("is everyone shorter than 200?")
console.log(characters.every(character => character.height < 200))


console.log("there is atleast one person with blue eyes")
console.log(characters.some(character => character.eye_color === "blue"))

console.log("there is atleast one person taller than 210")
console.log(characters.some(character => character.height > 210))








