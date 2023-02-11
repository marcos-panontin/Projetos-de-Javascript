// DRAGGIN THE SHIP

const shipIcon = document.getElementById('shipImg');
const locations = document.querySelectorAll('.location');

shipIcon.addEventListener('dragstart', dragStart)


function dragStart(e){
  console.log('drag starts...');
  // e.target.classList.add('hide');

  e.dataTransfer.setData('text/plain', e.target.id);

}

locations.forEach(location => {
  location.addEventListener('dragenter', dragEnter);
  location.addEventListener('dragover', dragOver);
  location.addEventListener('dragleave', dragLeave);
  location.addEventListener('drop', drop);
})

function dragEnter(e){
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e){
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e){
  e.target.classList.remove('drag-over');
}

function drop(e){
  e.target.classList.remove('drag-over');

  //get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  //add it to the drop target
  e.target.appendChild(draggable);
  console.log(e.target)

  //unhide :)
  draggable.classList.remove('hide');
  draggable.classList.add('red');

}