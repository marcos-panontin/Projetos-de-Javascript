let notas = []
const inputEl = document.getElementById("nota-input")
const registroEl = document.getElementById("nota-registro")

document.getElementById("incluir-btn").addEventListener("click", () => {
    notas.push(inputEl.value)
    renderNotas()
})


function renderNotas(){
    let notasItems = ""

    for (let i = 0; i < notas.length; i++){
        notasItems =+ "<li>" + notas[i] + "</li>"
    }
    // notaRegistro.textContent += notaInput.value + <br></br>
    registroEl.innerHTML += notasItems   
    // document.getElementById("nota=input");
    // console.log("botao apertado")
}
