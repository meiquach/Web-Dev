// Get the modal element
var modal = document.getElementById('simpleModal');
// Get the open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for open modal click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);


function openModal() {
  /*now, make the "display:none" of the .modal to 'block' display*/
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  /* made the modal to "display:none" again (as it was, by default) */
  modal.style.display = 'none';
}

// Function to close modal if outside click happens
function outsideClick(e) {
  /* any click outside the modal box would be considered as a click on the .modal
  so, when the event e's target is modal, close the modal box*/
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
