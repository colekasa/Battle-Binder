// Handler for adding a card by card_id to deck
const addCardToDeckHandler = async (event) => {
  event.preventDefault();

  // Variable to select the card_id from card data
  const card_imageEl = document.querySelector('figure > img');
  const card_id = card_imageEl.dataset.cardId;
  console.log(card_imageEl);

  // if there is a card_id fetch /api/decks and POST card_id to users deck
  if (card_id) {
    const response = await fetch(`/api/decks`, {
      method: 'POST',
      body: JSON.stringify({ card_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/deck');
    } else {
      alert('Failed to add Card to Deck');
    }
  }
};

document
// Id selector for "Add to Deck" button in homepage.handlebars file
  .querySelector('#add-to-deck')
  .addEventListener('click', addCardToDeckHandler);


// var favoritesBtn = document.querySelector('.favoritesBtn');

// favoritesBtn.addEventListener('click', function (event) {
//   // Prevent the default button click behavior
//   event.preventDefault();

//   // Navigate to the favorites screen by setting the window location to the favorites page URL
//   window.location.href = 'http://localhost:port/deck';
// });
