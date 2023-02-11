// ARRAYS OF CATEGORIES
const countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bosnia and Herzegovina",
	"Botswana",
	"Brazil",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"North Korea",
	"South Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Macedonia",
	"Romania",
	"Russia",
	"Rwanda",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"United Kingdom",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Virgin Islands",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Vatican"
];
const colors = ["orange", "blue", "yellow", "green"];
const movies = ["Titanic", "Avatar", "Back to the Future", "Avengers"];
const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
];
const food = ["Pizza", "Pie", "Bread", "Steak"];



// const arrayOfArrays = [food = ["Pizza", "Pie", "Bread", "Steak"], colors = ["orange", "blue", "yellow", "green"], movies = ["Titanic", "Avatar", "Back to the Future", "Avengers"]];
// console.log(arrayOfArrays[1][1]);
// console.log(arrayOfArrays)
// console.log(typeof arrayOfArrays[1])


const selectedArray = document.getElementById("categories");
const separatedLettersArray = [];
let index = "";
let secondIndex = "";
let randomWord = "";
const buttons = document.getElementsByClassName("alphabet-btn");
const newGameButton = document.getElementById("new-btn");
let guessingDiv = document.getElementById("guessing-div");

let gameStarted = false;
let gameWon = false;
let gameLost = false;
let mistakes = 0;
let correctGuesses = 0;
let difficultySelect = document.getElementById("difficulties");
let mistakesLimit = 0;
let difficultyChosen = false;
let categoryChosen = false;
let hangmanImages = []


//SELECTING CATEGORY
selectedArray.addEventListener ("change", function() {
    categoryChosen = true;
    index = selectedArray.options[selectedArray.selectedIndex].value;    
})

// SELECTING DIFFICULTY
difficultySelect.addEventListener ("change", function() {
    difficultyChosen = true;
    mistakesLimit = Number(difficultySelect.options[difficultySelect.selectedIndex].value);

    // if difficulty = 4
    // array of hangman images = select class hangmanimg hard
    if (mistakesLimit === 4){
        hangmanImages = document.getElementsByClassName("hangman-img-hard");
    } else if (mistakesLimit === 5){
        hangmanImages = document.getElementsByClassName("hangman-img-mid");
    } else if (mistakesLimit === 6){
        hangmanImages = document.getElementsByClassName("hangman-img-easy");
    }

})
// FUNCTION RESET EVERYTHING

function reset() {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("includes-btn");
        buttons[i].classList.remove("not-includes-btn"); 
    }

    document.getElementById("message-win").classList.add("displayNone");
    document.getElementById("message-lose").classList.add("displayNone");

    for (let i = 0; i < hangmanImages.length; i++) {
        hangmanImages[i].classList.add("displayNone");
    }

    hangmanImages[0].classList.remove("displayNone");

}


// FUNCTION NEW GAME
newGameButton.addEventListener("click", function () {
    reset()

    if (categoryChosen === true && difficultyChosen === true) {
        guessingDiv.innerHTML = "";
        gameStarted = true;
        generateRandomWord();
        separateLetters();
}
    else {
        document.getElementById("message-select").classList.remove("displayNone")
    }
}
)

function generateRandomWord(){
    if (index === "countries") {
        randomWord = countries[Math.floor(Math.random()*countries.length)].toUpperCase().replace(/\s/g,"");
    }
    else if (index === "animals") {
        randomWord = animals[Math.floor(Math.random()*animals.length)].toUpperCase();
    }
    else if (index === "colors") {
        randomWord = colors[Math.floor(Math.random()*colors.length)].toUpperCase();
    }
    else if (index === "food") {
        randomWord = food[Math.floor(Math.random()*food.length)].toUpperCase();
    }
    else if (index === "movies") {
        randomWord = movies[Math.floor(Math.random()*movies.length)].toUpperCase();
    }
}


function separateLetters() {
    for (let i = 0; i < randomWord.length; i++){
        const p = document.createElement("p");
        const s = document.createElement("span");
        p.appendChild(s);
        guessingDiv.appendChild(p);
        s.innerHTML = randomWord[i];
        separatedLettersArray.push( {
            word: randomWord[i],
            position: s,
            size: randomWord[i].length
        });
}
}


// PLAYING THE GAME

//CLICK THE BUTTON. CHECK IF BUTTON VALUE IS INSIDE OF RANDOMWORD. IF IT IS, ADD CLASS TO EQUIVALENT IMAGE

for (let i = 0; i < buttons.length; i++) {

        //CLICK A LETTER BUTTON
        buttons[i].addEventListener("click", function () {

            if (gameStarted === false){
            document.getElementById("message-select").classList.remove("displayNone")
            }

            if (gameStarted === true){

            // CHECK IF THE WORD HAS THAT LETTER
            if (randomWord.includes(buttons[i].innerHTML)) {
                buttons[i].classList.add("includes-btn");
                
                // MAKE WORD APPEAR
                for (let w = 0; w < separatedLettersArray.length; w++){
                    if (separatedLettersArray[w].word === buttons[i].innerHTML){
                        separatedLettersArray[w].position.classList.add("font18");
                        correctGuesses += 1
                    }
                    
                    // CHECKING IF GAME IS WON
                    if (correctGuesses === randomWord.length) {
                        console.log(randomWord.length)
                        alert("YOU WON THE GAME")
                        document.getElementById("message-win").classList.remove("displayNone");
                    }
                }

            }
            // IF WORD DOESNT HAVE THE LETTER
            else {
                buttons[i].classList.add("not-includes-btn");

                    for (let i = 0; i < hangmanImages.length; i++) {
                        hangmanImages[i].classList.add("displayNone");
                    }
                
                mistakes += 1;
                
                // CHECKING IF GAME IS LOST
                if (mistakes === mistakesLimit){
                    document.getElementById("message-lose").classList.remove("displayNone");
                }
                
                // SHOW CORRECT HANGMAN IMAGE
                for (let i = 0; i < 7; i++)
                if (mistakes === i) {
                    hangmanImages[i].classList.remove("displayNone");
                    break;
                }
                


            }
            }})
    }
    
// system for choosing difficulty
// system for checking if game is won