import { menuArray } from './data.js'
let foodItemsHTML = ''


function createFoodItemsHTML(){
    menuArray.forEach(function(foodItem){
        foodItemsHTML += 
        `
        <div class="individual-food-item">
            <p class="food-pic">${foodItem.emoji}</p>
            <div class="individual-food-item-info">
                <p class="">${foodItem.name}</p>
                <p class="">${foodItem.ingredients}</p>
                <p class="">$${foodItem.price}</p>
            </div>
            <button class="plus-btn btn" id="${foodItem.id}">+</button>
            
        </div>
        `
    })
    return foodItemsHTML
}

// LISTENING FOR CLICKS ON ADD BUTTON
document.addEventListener("click", function(e){

    //só aceitar cliques em botões
    if(e.target.classList.contains("btn")){


        // BOTÃO DE ADICIONAR COMIDA
        if(e.target.classList.contains("plus-btn")){
            // show "COMPLETE ORDER div if ADD button was pressed"
            document.getElementById("confirm-order-div").classList.remove("hidden");

            //ADICIONAR ITEM AO CARRINHO
            menuArray.filter(function(foodItem){

                if(foodItem.id === Number(e.target.id)){
                    foodItem.quantity++
                }
            })
            renderOrder()
        }


            //BOTÃO PARA REMOVER COMIDA
        else if(e.target.classList.contains("remove-btn")){
            menuArray.filter(function(foodItem){

                if(foodItem.id === Number(e.target.id)){
                    foodItem.quantity--
        
                }
        })
        renderOrder()
    }

        // BOTÃO PARA CONCLUIR PEDIDO
        else if(e.target.classList.contains("close-order")){
            document.getElementById("modal").classList.remove("hidden");

        }

        
        // botão para PAGAR
        else if(e.target.classList.contains("pay-btn")){
            // impedir refresh
            e.preventDefault()
            //esconder order list e modal
            document.getElementById("modal").classList.add("hidden");
            document.getElementById("confirm-order-div").classList.add("hidden");
            document.getElementById("thanks-msg").classList.remove("hidden");

        }

        //botão para NOVO PEDIDO
        else if(e.target.classList.contains("new-order-btn")){
            
            // esconder msg de agradecimento
            document.getElementById("thanks-msg").classList.add("hidden");


            //ZERAR QUANTIDADES DOS ITENS
            menuArray.forEach(function(foodItem){
                foodItem.quantity = 0
            })
        }
            
        }

})

function renderOrder(){
    let foodOrderHTML = ''
    menuArray.forEach(function(foodItem){

        if(foodItem.quantity > 0){
            foodOrderHTML += 
                `<div class="food-item-div">
                    <p>${foodItem.name} </p>
                    <p>x ${foodItem.quantity}</p>
                    <button class="remove-btn btn" id="${foodItem.id}">Remove${foodItem.name}</button>
                    <p>$${foodItem.price * foodItem.quantity}</p>
                </div>
                `
        }

    })
    document.getElementById("order-div").innerHTML = foodOrderHTML
    document.getElementById("total-price-div").innerHTML = `<p>Total Price:</p>
    <span>${getTotalPrice()}</span>`
}

function getTotalPrice(){
    let totalPrice = 0
    menuArray.forEach(function(foodItem){
        totalPrice += foodItem.price * foodItem.quantity
    })

    if(totalPrice === 0){
        document.getElementById("confirm-order-div").classList.add("hidden");
    }
    return totalPrice
}



function render(){

    document.getElementById("food-items").innerHTML = createFoodItemsHTML()
}

function funcaoSubmeter(){
    console.log("BOTAO SUBMETER CLICADO")
}

render()

