/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    console.log(draggable)
}




function highestCount(array) {
    let arrayOrganize = array.sort((a, b) => b - a);
    console.log(arrayOrganize);
    console.log("arrayOrganiza length" + arrayOrganize.length);
    let biggerNumber = arrayOrganize[0];
    let frequency = 0;
    for (let index = 0; index < arrayOrganize.length; index += 1) {
        console.log(arrayOrganize[index]);
        if (biggerNumber === arrayOrganize[index]) {
            frequency += 1;
        }
    }
            return frequency;

}
console.log(highestCount([27, 32, 45, 39, 12, 27, 14, 45, 45]));