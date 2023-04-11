var favoritesBtn = document.querySelector('.favoritesBtn');

favoritesBtn.addEventListener('click', function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Navigate to the favorites screen by setting the window location to the favorites page URL
  window.location.href = 'http://localhost:/favorites';
});
