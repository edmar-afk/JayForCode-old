// Get the modal
var modalAnim = document.getElementById("myModalAnim");

// Get the button that opens the modal
var btnAnim = document.getElementById("myBtnAnim");

// Get the <span> element that closes the modal
var spanAnim = document.getElementsByClassName("close-Anim")[0];

// When the user clicks the button, open the modal
btnAnim.onclick = function () {
  modalAnim.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanAnim.onclick = function () {
  modalAnim.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (enventAnim) {
  if (enventAnim.target == modalAnim) {
    modalAnim.style.display = "none";
  }
};
