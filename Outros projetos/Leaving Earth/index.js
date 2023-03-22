import { manuevers } from "./manuevers.js";

// Calling rightClick function
document.oncontextmenu = rightClick;

// // Hiding the menu IF already displayed
// // document.onclick = hideMenu;

// function hideMenu() {
//
// }

//CLOSING CONTEXT MENU ON LEFT CLICK ELSEWHERE

document.addEventListener("click", () => {
    if (document.getElementById("contextMenu").innerHTML) {
        document.getElementById("contextMenu").classList.toggle("displayNone");
    }
});

function rightClick(e) {
    // Preventing the default right click menu from popping up

    e.preventDefault();
    const targetListaDeClasses = e.target.classList;

    // Checking what class the clicked element contains and triggering the aproppriate response

    switch (true) {
        case targetListaDeClasses.contains("shipImg"):
            //REMOVING DISPLAYNONE FROM CLOSING PREVIOUS MENU
            document
                .getElementById("contextMenu")
                .classList.remove("displayNone");

            //APAGANDO O MENU ANTERIOR
            document.getElementById("contextMenu").innerHTML = "";

            //MOSTRANDO O MENU PARA NAVE
            const menu = document.createElement("ul");
            menu.classList.add("context-menu");

            const currentLocation = findShipLocation()
            for (let index = 0; index < manuevers.length; index += 1) {
                if (manuevers[index].From === currentLocation) {
                    // CREATING THE MENU WITH POSSIBLE LOCATIONS
                    const menuItem = document.createElement("li");
                    menuItem.textContent += `Travel to ${manuevers[index].To}`;
                    menu.appendChild(menuItem);
                    // LISTENING FOR CLICKS ON LOCATIONS AND CALLING THE TRAVEL TO FUNCTION
                    menuItem.addEventListener("click", () => {
                        travelTo(manuevers[index].To);
                    });
                }
            }
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
            document.getElementById("contextMenu").appendChild(menu);
            break;

        case targetListaDeClasses.contains("location"):
            console.log("Clicou em locação");
            break;
    }
}

const ship = document.getElementById("shipImg");

const shipContainer = document.querySelector(".ship-icon-container");

function travelTo(futureLocation) {
    locationsCollection.forEach((location) => {
        if (futureLocation === location.name) {
            shipContainer.setAttribute("style", "border: 1px solid black");
            shipContainer.style.gridRow = location.dataset.row;
            shipContainer.style.gridColumn = location.dataset.column;
        }
    });
}

// POPULATING THE RIGHT CLICK MENU DINAMICALLY, DEPENDING ON THE LOCATION AND ITS POSSIBLE DESTINATIONS

//////////////////////////////////////////
//////// MOVING THE SHIP /////////////////
//////////////////////////////////////////

// CHECKING IF ELEMENTS OVERLAP - CHECKING WHERE THE SHIP IS

//GETTING SHIP LOCATIONS

const shipTop = shipContainer.getBoundingClientRect().top;
const shipRight = shipContainer.getBoundingClientRect().right;
const shipBottom = shipContainer.getBoundingClientRect().bottom;
const shipLeft = shipContainer.getBoundingClientRect().left;
console.log(
    `shiptob: ${shipTop} / shipRight: ${shipRight} / shipBottom: ${shipBottom} / shipLeft: ${shipLeft}`
);

// CHECKING WHICH LOCATION MATCHES THE SHIP COORDINATES
const locationsCollection = Array.from(
    document.getElementsByClassName("location")
);

function findShipLocation () {
    let shipCurrentLocation = "";

    locationsCollection.forEach((location) => {

        //     console.log(
        //         `Location: ${location.name} /// locationTop: ${
        //             location.getBoundingClientRect().top
        //         } / locationRight: ${
        //             location.getBoundingClientRect().right
        //         } / locationBottom: ${
        //             location.getBoundingClientRect().bottom
        //         } / locationLeft: ${location.getBoundingClientRect().left}`
        //     );
        
        // console.log(
        //     shipTop > location.getBoundingClientRect().top &&
        //         shipBottom < location.getBoundingClientRect().bottom &&
        //         shipLeft > location.getBoundingClientRect().left &&
        //         shipRight < location.getBoundingClientRect().right
        // );

        if (
            shipTop > location.getBoundingClientRect().top &&
            shipBottom < location.getBoundingClientRect().bottom &&
            shipLeft > location.getBoundingClientRect().left &&
            shipRight < location.getBoundingClientRect().right
        ) {

            shipCurrentLocation = location.name;
            console.log(shipCurrentLocation);
            return shipCurrentLocation;
        }
    });
}

function initialShipRender() {
    // ship.style.gridRow = 5;
    // ship.style.gridColumn = 3;
}

initialShipRender();

// CODE FOR DRAGGING THE SHIP (NOT WORKING, DONT KNOW WHY)

// /* draggable element */
// const shipItem = document.querySelector(".shipImg");

// shipItem.addEventListener("dragstart", dragStart);

// function dragStart(e) {
//     e.dataTransfer.setData("text/plain", e.target.id);
//     setTimeout(() => {
//         e.target.classList.add("hide");
//     }, 0);
// }

// /* drop targets */
// const locations = document.querySelectorAll(".location");

// boxes.forEach((box) => {
//     location.addEventListener("dragenter", dragEnter);
//     location.addEventListener("dragover", dragOver);
//     location.addEventListener("dragleave", dragLeave);
//     location.addEventListener("drop", drop);
// });

// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add("drag-over");
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add("drag-over");
// }

// function dragLeave(e) {
//     e.target.classList.remove("drag-over");
// }

// function drop(e) {
//     e.target.classList.remove("drag-over");

//     // get the draggable element
//     const id = e.dataTransfer.getData("text/plain");
//     const draggable = document.getElementById(id);

//     // add it to the drop target
//     e.target.appendChild(draggable);

//     // display the draggable element
//     draggable.classList.remove("hide");
// }
