// Get the modal
var modalSkills = document.getElementById("myModalSkills");

// Get the button that opens the modal
var btnSkills = document.getElementById("myBtnSkills");

// Get the <span> element that closes the modal
var spanSkills = document.getElementsByClassName("close-Skills")[0];

// When the user clicks the button, open the modal 
btnSkills.onclick = function() {
  modalSkills.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSkills.onclick = function() {
  modalSkills.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(enventSkills) {
  if (enventSkills.target == modalSkills) {
    modalSkills.style.display = "none";
  }
}