const upperLetters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerLetters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const selectedCharacters = [];
const senhaEl1 = document.getElementById("senha-el1");
const senhaEl2 = document.getElementById("senha-el2");
const numberEl = document.getElementById("number-box");
let passwordLength = "";


// setting Initial state for checkboxes
let lowerLettersChecked = false;
let upperLettersChecked = false;
let numbersChecked = false;
let symbolsChecked = false;

// const checkboxes = document.querySelectorAll("input[type=checkbox][class=toggle-el]");
// console.log(checkboxes)

// //LISTENING FOR CHECKBOX AND CREATING APROPRIATE ARRAY

//   checkbox.addEventListener("change", (e) =>
//    if (e.target.checked) {
//     console.log("IT IS CHECKED!")
//   })


//IF CAPITAL


document.getElementById("generate-btn").addEventListener("click", function generatePassword(){
  passwordLength = numberEl.value

  let password1 = ""
    for (i = 0; i < passwordLength; i++)
    password1 += characters[Math.floor(Math.random() * characters.length)]
    senhaEl1.textContent = password1

    let password2 = ""
    for (i = 0; i < passwordLength; i++)
    password2 += characters[Math.floor(Math.random() * characters.length)]
    senhaEl2.textContent = password2

}
)