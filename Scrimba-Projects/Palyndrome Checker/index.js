const submission = document.getElementById("inputText");
const checkBtn = document.getElementById("check-btn")
const palominoMessage = document.getElementById("palominoMessage")
const notPalominoMessage = document.getElementById("notPalominoMessage")
const palominoImage = document.getElementById("palominoImage")
const notPalominoImage = document.getElementById("notPalominoImage")



checkBtn.addEventListener("click", function (){
    check()
    cosole.log("He")
})

function check(){
    notPalominoMessage.classList.add("hidden")
    notPalominoImage.classList.add("hidden")
    palominoMessage.classList.add("hidden")
    palominoImage.classList.add("hidden")
    
    if (submission.value && submission.value.length > 1){

        let submissionValue = submission.value;
        let normalString = submissionValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[.,\s]/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/[\W_]/g, "").toLowerCase();
        console.log(normalString);
        let reverseString = normalString.split("").reverse().join("");
        console.log(reverseString);
        
        if (reverseString === normalString){
            palominoMessage.classList.remove("hidden")
            palominoImage.classList.remove("hidden")
        }
        else {
            notPalominoMessage.classList.remove("hidden")
            notPalominoImage.classList.remove("hidden")
            }
    }

    
    }
    
// HIDING IMAGES AND TEXT WHEN THE INPUT FIELD IS BEING ALTERED
// CHECKING AUTOMATICALLY IF IT IS A PALINDROME. BUTTON OBSOLETE
submission.addEventListener("input", function (){
    notPalominoMessage.classList.add("hidden")
    notPalominoImage.classList.add("hidden")
    palominoMessage.classList.add("hidden")
    palominoImage.classList.add("hidden")
})


document.querySelector