//<!-- FOOD2FORK -->

var runAjax = function(link){
    // 'https://gt-api-proxy.herokuapp.com/api/food2fork/' + everything in the examples after '/api/' i.e.
    // url: 'https://gt-api-proxy.herokuapp.com/api/food2fork/search?key=1f35aa9b21774c9228255e0d0e0844f2&q=shredded%20beef',
    $.ajax({ url: link, method: "Get"}).done(function(responseStr) {
    console.log(responseStr);
    // parse the string response with JSON.parse
    var response = JSON.parse(responseStr)
        // $('#food2fork').(JSON.stringify(response, null, 2))

    console.log(response);
    for (var i = 0; i < response.recipes.length; i += 1) {

        var atag = $("<a>");
        var gifDiv = $("<div class='item'>");
        var title = $("<p>").text(response.recipes[i].title);
        var image = $("<img>");

        atag.attr({
          "href": response.recipes[i].source_url,
          "target":"_blank"


    });
        image.attr({
            src: response.recipes[i].image_url,
            "data-animate": response.recipes[i].title,
            "target":"_blank"
            // "data-still":response.data[i].images.fixed_height_still.url,
            // "data-name": "still"
        });

              atag.append(gifDiv)
              atag.append(title);
              atag.append(image);

        $('#food2fork').append(atag);
    }

}).fail(function(err) {
    console.error(err)
});
}

//Empty the container
//Grabbing users input and push it to the array
//display the new array
$('.btn').on('click', function(){
  $('#food2fork').empty();
  var userValue = $('textarea').val().replace(' ', ' ');
  //Validation
  if (userValue !== '') {
    var link = 'https://gt-api-proxy.herokuapp.com/api/food2fork/search?key=1f35aa9b21774c9228255e0d0e0844f2&count=6&q='+ userValue;
      runAjax(link);
  }

  //empty text after userinput
  $('textarea').val('');
 //console.log("Hello WOrld");
});