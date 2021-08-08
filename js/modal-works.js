// Get the modal
var modalWorks = document.getElementById("myModalWorks");

// Get the button that opens the modal
var btnWorks = document.getElementById("myBtnWorks");

// Get the <span> element that closes the modal
var spanWorks = document.getElementsByClassName("close-works")[0];

// When the user clicks the button, open the modal 
btnWorks.onclick = function() {
  modalWorks.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanWorks.onclick = function() {
  modalWorks.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWorks) {
    modalWorks.style.display = "none";
  }
}