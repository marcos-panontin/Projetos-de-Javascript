const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal")

openBtn.addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
}
)

closeBtn.addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
}
)