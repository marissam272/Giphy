    // variables
//==========================================
//my key to the giphy api
var apiKey = "oJsmyX8BKSB5H0S1b44TVyFKIbl2KWrr";
//variable named categories that contains an array of strings
var categories = [
    "kittens",
    "puppies",
    "babies"
];
var queryTerm = "";
// variable to piece together the api main link and the api key,
// with the ability to have a query search
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      categories + "&api_key=dc6zaTOxFJmzC&limit=10";

      function renderButtons() {

        // Delete the content inside the movies-view div prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)

        $("#cuteButtons").empty();
        categories.push($("#cute-form").val()) 

        // Loop through the array of movies, then generate buttons for each movie in the array

        for (var i = 0; i < categories.length; i++) {
          // $("#add-movie").html("<button>");

          var cuteButton = $('<button>');
          cuteButton.text(categories[i]);
          $('#cuteButtons').append(cuteButton)
        }

      }
      console.log("hello?", renderButtons());