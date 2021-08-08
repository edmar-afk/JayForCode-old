// Get the modal
var modalAbout = document.getElementById("myModalAbout");

// Get the button that opens the modal
var btnAbout = document.getElementById("myBtnAbout");

// Get the <span> element that closes the modal
var spanAbout = document.getElementsByClassName("close-About")[0];

// When the user clicks the button, open the modal 
btnAbout.onclick = function() {
  modalAbout.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAbout.onclick = function() {
  modalAbout.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(enventAbout) {
  if (enventAbout.target == modalAbout) {
    modalAbout.style.display = "none";
  }
}