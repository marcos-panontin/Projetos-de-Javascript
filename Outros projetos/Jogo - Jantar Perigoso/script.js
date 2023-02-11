const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
  direction === "next"
    ? (translate -= translateAmount)
    : (translate += translateAmount);

  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

////////////////////
//////////MODAL/////
////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var hint = document.getElementById("hint");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
hint.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

///TOGGLE PENSAR MENU /////

//FOOTER
const hintItemsDOM = document.getElementsByClassName("hint-list-item");
console.log(hintItemsDOM);


console.log("MESSAGE")
console.log(hintItems);

hintItems.addEventListener("click", function () {
  console.log("CLICOU");
});
