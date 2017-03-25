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
        var q = response.recipes[i].title;
        var youtube = $("<a>").text("YouTube").attr('id', 'youtubeLink');

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

        $.get(
          "https://www.googleapis.com/youtube/v3/search", {
          part: 'snippet, id',
          q: q + "recipe",
          type: 'video',
          key: 'AIzaSyA6-uScE8rH1m8-lHzRlmgjcg7TA_BnGqU'},
          function (data) {
            console.log(data);
            $.each(data.items, function(i, item){
            // // Get Output
            // var output = getOutput(item);

            // // Display Results
            // // $('#results').append(output);
            var videoId = item.id.videoId;
            console.log(videoId);
            $('#youtubeLink').attr({
                "href": "https://www.youtube.com/watch?v=" + videoId,
                "target":"_blank"
            });

            });
        });

              atag.append(gifDiv)
              atag.append(title);
              atag.append(youtube);
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