import { listaDePalavras } from './data.js'


const categoriesDiv = document.getElementById("categories-div");
let selectedItemsArray = [];


//OPENING SETTINGS MODAL

document.getElementById("open-modal-button-div").addEventListener('click', function(){
    
    categoriesDiv.classList.toggle('hidden')

})

// FILTERING ARRAYS

const checkboxes = document.getElementsByClassName('checkboxes');



function filterAndMergeArrays(){
    selectedItemsArray = []
    for (let item of checkboxes){
        if(item.checked){
            listaDePalavras.filter(function(lista){
                if(lista.categoryTitle === item.id){
                    selectedItemsArray = selectedItemsArray.concat(Object.values(lista.categoryList))
                }
            })
        }
    }
}


// GENERATE BUTTON

document.getElementById('generate-button').addEventListener('click', function(){
    filterAndMergeArrays();
    generateWord();
    renderWords()
})


//GERAR PALAVRA
let word1 = '';
let word2 = '';
let word3 = '';



function generateWord(){
    word1 = selectedItemsArray[Math.floor(Math.random()*selectedItemsArray.length)];
    word2 = selectedItemsArray[Math.floor(Math.random()*selectedItemsArray.length)];
    word3 = selectedItemsArray[Math.floor(Math.random()*selectedItemsArray.length)];
}

//RENDER WORDS
function renderWords(){
    document.getElementById('word1').innerHTML = word1;
    document.getElementById('word2').innerHTML = word2;
    document.getElementById('word3').innerHTML = word3;

}


//RENDER CATEGORIES
function renderCategories(){
    let categoriesHTML = ''
    listaDePalavras.forEach(function(item){
        categoriesHTML +=  `<label>${item.categoryTitle}</label>
        <input type="checkbox" class="checkboxes" id="${item.categoryTitle}" checked>| `
    })
    document.getElementById('categories-div').innerHTML = categoriesHTML
}

renderCategories()


//PARA PERMITIR A SELEÇÃO DA QTDE DE PALAVRAS

let displayDePalavras = document.getElementById("words-display-inner");
let quantidadeDePalavras = 3


for (let i = 0; i < quantidadeDePalavras; i++){
    displayDePalavras.innerHTML += "a"
}

console.log(displayDePalavras)