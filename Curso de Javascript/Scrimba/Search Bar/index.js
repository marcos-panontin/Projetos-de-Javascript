// Listening for the input, storing it, setting it to Lower Case

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();

    // getting all the names using their class
    let allNamesDOMCollection = document.getElementsByClassName("name")


    //Getting each item from list in HTML and storing in a Array
for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase()

    // Comparing the Search Bar content with each item from Array

    if (currentName.includes(searchQuery)) {
        allNamesDOMCollection[i].style.display = "block";
    }
    else {
        allNamesDOMCollection[i].style.display = "none";
    }
}

});
