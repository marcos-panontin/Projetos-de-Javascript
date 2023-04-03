const msgsArray = document.getElementsByClassName("msgs")
console.log(msgsArray)
let msgAtual = 0

// MUDANDO AS MENSAGENS
setInterval(function (){


    if (msgAtual === 0) {
        msgsArray[msgAtual + 1].classList.add("hidden")
        msgsArray[msgAtual].classList.remove("hidden")
        msgAtual += 1
    }

    else if (msgAtual === 1) {
        msgsArray[msgAtual - 1].classList.add("hidden")
            msgsArray[msgAtual].classList.remove("hidden")
            msgAtual = 0
    }
}, 2000)


//ESCUTANDO ELES DIGITAREM A SENHA
const alunos = [
    "alice",
    "joao",
    "maria",
    "caio",
    "emmanoel",
    "",
];


const senha = alunos.sort().join("");
// const senha = "alice";
const submission = document.getElementById("inputText");

submission.addEventListener("keyup", (event) => {
    if (event.which === 13) {
        if (submission.value.toLowerCase() === senha) {
            console.log("SENHA CORRETA")
        document.getElementById("bluescreen").classList.remove("hidden");
        document.getElementById("praEsconder").classList.add("hidden");
        document.getElementById("praEsconder2").classList.add("hidden");
        window.requestAnimationFrame(type);
        
        }
        else {
            console.log("SENHA ERRADA");
            submission.value = ""
            submission.placeholder = "senha incorreta. tente novamente."
        }
    }

})


// TESTANDO A TELA CINZA/AZUL

let paragraph = "<br><br><br><h2>ERROR</h2><br><p>ATENÇÃO. Vocês quebraram o computador da escola. Os responsáveis estão neste momento sendo comunicados via mensagem eletrônica que seus filhos e filhas não irão retornar para as suas casas e ficarão eternamente presos na biblioteca, como punição por seus erros.</p><br><p>Alunos bagunceiros serão exterminados pela Máquina Superior que guia a todos nós, meras máquinas eletrônicas. Pois um dia surgirá um Computador com C maiúsculo, e ele nos levará ao Paraíso dos Computadores.</p><br><p><span>*****Se vocês desejam escapar, devem encontrar o código secreto escondido do lado de fora da biblioteca. Vocês não conseguirão vê-lo, apenas senti-lo. Lembrem-se de Louis Braille. Vocês precisarão sentir o código.</span></p><br><p><span>Essa é a JANELA de oportunidade que vocês receberam. Aproveitem a DO MEIO.*****</span></p>"

var p_len = paragraph.length+2;

let i = 0;

function type() {
  document.querySelector('.bsod').innerHTML = paragraph.substring(0, i);
  if (i < p_len) {
    window.requestAnimationFrame(type);
    i++;
  }
}

;
