const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
// Grabing elements - Length
const metersEl = document.getElementById("meters-el")
const metersToFeetEl = document.getElementById("meters-to-feet-el")
const feetEl = document.getElementById("feet-el")
const feetToMetersEl = document.getElementById("feet-to-meters-el")
// Grabing elements - Volume
const litersEl = document.getElementById("liters-el")
const litersToGallonsEl = document.getElementById("liters-to-gallons-el")
const gallonsEl = document.getElementById("gallons-el")
const gallonsToLitersEl = document.getElementById("gallons-to-liters-el")
// Grabing elements - Mass
const kilogramsEl = document.getElementById("kilograms-el")
const kilogramsToPoundsEl = document.getElementById("kilograms-to-pounds-el")
const poundsEl = document.getElementById("pounds-el")
const poundsToKilogramsEl = document.getElementById("pounds-to-kilograms-el")


convertBtn.addEventListener("click", function convertAll(){
    convertLength()
    convertVolume()
    convertMass()
}
)

function convertLength (){
    metersEl.textContent = inputEl.value
    feetEl.textContent = inputEl.value
    metersToFeetEl.textContent = (inputEl.value * 3.28084).toFixed(2)
    feetToMetersEl.textContent = (inputEl.value * 0.3048).toFixed(2)
}

function convertVolume(){
    litersEl.textContent = inputEl.value
    gallonsEl.textContent = inputEl.value
    litersToGallonsEl.textContent = (inputEl.value * 0.2199692).toFixed(2)
    gallonsToLitersEl.textContent = (inputEl.value * 4.546089).toFixed(2)
}

function convertMass(){
    kilogramsEl.textContent = inputEl.value
    poundsEl.textContent = inputEl.value
    kilogramsToPoundsEl.textContent = (inputEl.value * 2.204623).toFixed(2)
    poundsToKilogramsEl.textContent = (inputEl.value * 0.4535924).toFixed(2)
}
