
$.ajax({
     // 'https://gt-api-proxy.herokuapp.com/api/food2fork/' + everything in the examples after '/api/' i.e.
     url: 'https://gt-api-proxy.herokuapp.com/api/food2fork/search?key=1f35aa9b21774c9228255e0d0e0844f2&q=potato',
     method: 'GET'
   }).done(function (responseStr) {
     console.log(responseStr);
     // parse the string response with JSON.parse
     var response = JSON.parse(responseStr)
    // $('#food2fork').(JSON.stringify(response, null, 2))

     console.log(response);

     var image =$("<img>");
       image.attr({
           src:response.recipes[0].image_url
         // "data-animate":response.data[i].images.fixed_height.url,
         // "data-still":response.data[i].images.fixed_height_still.url,
         // "data-name": "still"
       });

       $('#food2fork').append(image);

   }).fail(function (err) {
     console.error(err)
   });