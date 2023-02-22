// Calling rightClick function
document.oncontextmenu = rightClick;

// // Hiding the menu IF already displayed
// // document.onclick = hideMenu;

// function hideMenu() {
//     document.getElementById("contextMenu").style.display = "none";
// }

function rightClick(e) {
    // Preventing the default right click menu from popping up

    e.preventDefault();

    //MOSTRANDO O MENU
    const menu = document.getElementById("contextMenu");
    menu.classList.toggle("displayNone");
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";

    // Clicou em nave? - USANDO IF STATEMENT (substituído pelo Switch Statement)

    // if (e.target.id === "shipImg") {
    //     console.log("Clicou na nave");
    // }

    // // Clicou em location?
    // else if (e.target.classList.contains("location")) {
    //     console.log("Clicou em location");
    // }
    const targetListaDeClasses = e.target.classList;

    // Checking what class the clicked element contains and triggering the aproppriate response

    switch (true) {
        case targetListaDeClasses.contains("shipImg"):
            console.log("Clicou na nave");
            break;

        case targetListaDeClasses.contains("location"):
            console.log("Clicou em locação");
            break;
    }
}

//////////////////////////////////////////
//////// MOVING THE SHIP /////////////////
//////////////////////////////////////////

// CHECKING IF ELEMENTS OVERLAP - CHECKING WHERE THE SHIP IS

const ship = document.getElementById("shipImg");

//GETTING SHIP LOCATIONS

const shipTop = ship.getBoundingClientRect().top;
const shipRight = ship.getBoundingClientRect().right;
const shipBottom = ship.getBoundingClientRect().bottom;
const shipLeft = ship.getBoundingClientRect().left;

const locationsCollection = Array.from(
    document.getElementsByClassName("location")
);

locationsCollection.forEach(checkingOverlap);

// CHECKING WHICH LOCATION MATCHES THE SHIP COORDINATES

function checkingOverlap(location) {
    if (
        shipTop > location.getBoundingClientRect().top &&
        shipBottom < location.getBoundingClientRect().bottom &&
        shipLeft > location.getBoundingClientRect().left &&
        shipRight < location.getBoundingClientRect().right
    ) {
        console.log(location);
    }
}

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
