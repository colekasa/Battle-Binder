var cardInput = document.querySelector('.searchBar');
var searchBtn = document.querySelector('.searchBtn');

function cardSearch(card) {
  // Convert the card name used in the search to a case-insensitive search
  card = card.toLowerCase();

  //Send a GET request to the API endpoint with the card name as a path parameter
  fetch(`http://localhost:port/api/cards/${cardInput}`)
    .then((response) => response.json())
    .then((data) => {
      //pass the card data into the cardInfo function
      cardInfo(data);
    })
    .catch((err) => {
      console.error('Error', err);
    });
}

function cardInfo(cardData) {
  // retrieve the card URL from the cardData
  var cardURl = cardData.image_url;

  //display the card image on the screen
  //TODO: querySelector could change based on the class name of the image_url
  var cardImage = document.querySelector('.image_url');

  cardImage.textContent = cardURl;
}

submit.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.prevenDefault();

  //trim the image_url in case there are extra characters that are not needed
  var cardImage = cardInput.value.trim();

  if (cardImage !== '') {
    // If the CardImage field is not empty, call the cardSearch function with the card name
    cardSearch(cardImage);
  }
});
