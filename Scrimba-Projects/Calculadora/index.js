let currentValue = ""
let previousValue = ""
let operatorSelected = ""
let result = 0


window.addEventListener("click", function(e){


    // CLICKS ON NUMBER BUTTONS
    if(e.target.classList.contains("num-buttons")){
        currentValue += ("" + e.target.value);
        updateDisplay()
    }

    // CLEAR BUTTON
    if(e.target.classList.contains("clear")){
        clear()
    }

    //DELETE BUTTON

    if(e.target.classList.contains("delete")){
        deletar()
    }

    // OPERATOR BUTTON
    if(e.target.classList.contains("operators")){
        // PRIMEIRA CONTA
        if(result === 0){
            previousValue = currentValue;
            currentValue = "";
            operatorSelected = e.target.value;
    
            document.getElementById("previous-value").innerText = previousValue + operatorSelected;
            document.getElementById("current-value").innerText = "";
        }

        // CONTINUAR A CONTA
        else {
            previousValue = result;
            currentValue = "";
            operatorSelected = e.target.value;
            document.getElementById("previous-value").innerText = previousValue + operatorSelected;
            document.getElementById("current-value").innerText = "";
        }
    }

    // RESULT BUTTON
    if(e.target.classList.contains("equal")){
        performCalculation()
    }

    // LIMITAR O TAMANHO DOS VALUES, PARA CABER NO VISOR

    if(currentValue.length > 7){
        currentValue = currentValue.substring(0, 7);
        console.log(currentValue)
    }
    if(previousValue.length > 7){
        previousValue = previousValue.substring(0, 7);
        console.log(previousValue)
    }
})

function clear() {
        currentValue = "";
        previousValue = "";
        result = 0;
        document.getElementById("current-value").innerText = "0";
        document.getElementById("previous-value").innerText = "0";
}

//////////////////////////////////////////
/////// ESSA FUNÇÃO PRECISA DE BASTANTE TRABALHO. NÃO FUNCIONA DIREITO
//////////////////////////////////////////
//////////////////////////////////////////

function deletar() {
    currentValue = currentValue.slice(0, -1);
    console.log(currentValue)

    document.getElementById("previous-value").innerText = currentValue
}

function performCalculation() {

    // ADDITION
    if(operatorSelected === "+"){
        result = Number.parseFloat((+previousValue + +currentValue).toFixed(3));    
    }
    // SUBTRACTION
    if(operatorSelected === "-"){
        result = Number.parseFloat((+previousValue - +currentValue).toFixed(3));    
    }
    // DIVISION
    if(operatorSelected === "/"){
        if(+currentValue === 0){
            console.log("ERROR MESSAGE")
            document.getElementById("result-display").innerText = "ERRO";
            return
        }
        else{
            result = Number.parseFloat((+previousValue / +currentValue).toFixed(3));
        }
    }
    // MULTIPLICATION
    if(operatorSelected === "*"){
        result = Number.parseFloat((+previousValue * +currentValue).toFixed(3));
    }

    //UPDATING MINI DISPLAY
    document.getElementById("previous-value").innerText = previousValue + operatorSelected + currentValue;

    // UPDATING MAIN DISPLAY
    document.getElementById("current-value").innerText = result;
}

function getDisplayNumber() {
}

function updateDisplay() {
    document.getElementById("current-value").innerText = currentValue;
    if(previousValue){
        document.getElementById("previous-value").innerText = previousValue
    }
}

console.log(currentValue)



////////////////////// MELHORIAS
// 1 - lidar com contas com números negativos
// 2 - fazer a função deletar funcionar direito. Ela precisa apagar números ou operadores, não apagar o resultado.
// 3 - criar limite p o número de caracteres do input e das contas
// 4 -adicionar divisor de milhar
