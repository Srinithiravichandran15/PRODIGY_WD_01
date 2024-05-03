const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

openPopupButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Optional: Close the pop-up when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.add('hidden');
  }
});
