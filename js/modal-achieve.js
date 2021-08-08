// Get the modal
var modalAchieve = document.getElementById("myModalAchieve");

// Get the button that opens the modal
var btnAchieve = document.getElementById("myBtnAchieve");

// Get the <span> element that closes the modal
var spanAchieve = document.getElementsByClassName("close-Achieve")[0];

// When the user clicks the button, open the modal 
btnAchieve.onclick = function() {
  modalAchieve.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAchieve.onclick = function() {
  modalAchieve.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(enventAchieve) {
  if (enventAchieve.target == modalAchieve) {
    modalAchieve.style.display = "none";
  }
}