import { choiceEvents } from "./data.js";

// DECLARING VARIABLES
let age = 0;
let happiness = 0;
let money = 0;
let health = 0;

// MANIPULATING THE DOM

const choiceBtnOne = document.getElementById("choice-btn-one");
const choiceBtnTwo = document.getElementById("choice-btn-two");
const choiceBtns = document.querySelectorAll(".choice-btn");


// CREATING THE PROBLEM PHRASES

  for (let i = 0; i < choiceEvents.length; i++) {
    const event = choiceEvents[i];

    // CALLING THE PLAYER "KID", "TEEN", "ADULT", ETC
    let ageDescriptor = ""
    if (event.age < 13){
        ageDescriptor = "kid"
    }
    else if (event.age >= 13 && event.age <20){
        ageDescriptor = "teen"
    }

    if (!event.eventTitle) {
      event.eventTitle = `You are a ${event.age} years old ${ageDescriptor}. ${event.eventText}`;
    }
  }
  

  choiceBtns.forEach(function(button){
    button.addEventListener("click", function(e){
        age++;
        let whichChoiceIndex = 0
        // SE CLICOU NO CHOICE 1
        if(e.target.id === "choice-btn-one"){
            whichChoiceIndex = 0
        }

        // SE CLICOU NO CHOICE 2
        else if(e.target.id === "choice-btn-two"){
            whichChoiceIndex = 1
        }

        renderProblemText();
        renderChoiceBtns()
        renderAge();
        calculateMetrics(whichChoiceIndex);
        renderMetrics()

    })

    })
  
  
// CALCULATING METRICS
function calculateMetrics(i){ 
    money = money + choiceEvents[age - 1].choices[i].moneyChange;
    happiness = happiness + choiceEvents[age - 1].choices[i].happinessChange;
    health = health + choiceEvents[age - 1].choices[i].healthChange;
}

// RENDER METRICS
  function renderMetrics(){
    document.getElementById("metrics-hap").innerText = happiness;
    document.getElementById("metrics-mon").innerText = money;
    document.getElementById("metrics-hea").innerText = health;
  }

//RENDER AGE
function renderAge(){
    document.getElementById("age-text").innerText = "Age: " + age;
}

// RENDER BUTTON WITH CUSTOM CHOICES
function renderChoiceBtns(){
    choiceBtnOne.innerText = choiceEvents[age].choices[0].choice1Text;
    choiceBtnTwo.innerText = choiceEvents[age].choices[1].choice2Text
}

//RENDER PROBLEM TEXT
function renderProblemText(){
    let problemText = choiceEvents[age].eventTitle
    document.getElementById("problem-text-div").innerText = problemText;
  }







renderProblemText()
renderAge()
renderChoiceBtns()