
var modalUpdate = document.getElementById("myModalUpdate");

// Get the button that opens the modal
var btnUpdate = document.getElementById("myBtnUpdate");

// Get the <span> element that closes the modal
var spanUpdate = document.getElementsByClassName("closeUpdate")[0];

// When the user clicks the button, open the modal 
btnUpdate.onclick = function() {
  modalUpdate.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanUpdate.onclick = function() {
  modalUpdate.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(eventUpdate) {
  if (eventUpdate.target == modalUpdate) {
    modalUpdate.style.display = "none";
  }
}