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

      $(document).ready(function() {

      $("#add-input").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        queryTerm = $("#cute-input").val();
        //push the users submitted topic to the array
        categories.push(queryTerm);
        // variable that holds a button with the queryTerm embedded
        var categoryButton = $("<button>" + queryTerm + "</button>");
        // give the new button the data-animal attribute
        categoryButton.attr("data-animal", queryTerm);
        // place the new button in the div with #buttons id
        $("#buttons").append(categoryButton);
        //==have the buttons coordinate with the giphy api========
        $("#buttons").on("click", function() {

            queryURL;
            // var x = $(this).data("cuteness");
            // console.log(x);
            // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            //     x + "&api_key=7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var newDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var newImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          newImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          newDiv.append(p);
          newDiv.append(newImage);

          // Prependng the newDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifsHere").prepend(newDiv);
        }
    });
});
});
      

      function renderButtons() {

        // Delete the content inside the movies-view div prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)

        $("#buttons").empty();
        categories.push($("#cute-form").val()) 

        // Loop through the array of movies, then generate buttons for each movie in the array

        for (var i = 0; i < categories.length; i++) {
          // $("#add-movie").html("<button>");

          var cuteButton = $('<button>');
          cuteButton.text(categories[i]);
          $('#buttons').append(cuteButton)
        }

      console.log("hello?", renderButtons());

      $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }

    });

};

});
