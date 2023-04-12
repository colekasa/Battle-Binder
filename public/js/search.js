// set to getelementById to just add proper ids to html 
var cardInput = document.getElementById('searchBar');
var searchBtn = document.getElementById('searchBtn');

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
  var cardImage = document.getElementById('card-result');

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

// ____________________________________________________________________


var cardInput = document.getElementById('searchBar');
var searchBtn = document.getElementById('searchBtn');



function searchCard() {
  var searchCard = cardInput.value;
  var getCard = `http://localhost:port/api/cards/${searchCard}`;

  fetch(getCard)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {

// loop that gets the value of how many recipes are available from related search  
          var availableMeals = data.meals.length;
          for (var arrayMeal = 0; arrayMeal < availableMeals; arrayMeal++) {
              var mealType = arrayMeal;
              
//variable to reach certain object properties, to avoid typing whole path (pretty sure there is an easier way)
          var mealPath = (data.meals[mealType]); 

// console log to see and test what the object is displaying 
              console.log(mealPath);

// creates and appends different tags to the meal-result id on the html of each different recipes that api results from search (recipe name, igredients, instructions)
             
              var mealImage = document.createElement("img");

              
              meal.textContent = mealPath.strMeal;
              recipe.textContent = mealPath.strInstructions;
              ingredientsHeader.textContent ="Ingredients";
              recipeHeader.textContent ="Recipe";
              mealImage.src = mealPath.strMealThumb;
       
              mealResult.append(ingredients,recipeHeader,recipe, mealImage);


              
              
          }
          
      })
};