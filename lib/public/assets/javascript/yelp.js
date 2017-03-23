// GLOBAL var for access token
  var accessToken = 'idjxhcB3KwhpsFabfL5wANG4FdopC8mezW41HlWrEcGJt52yPF…iEtBHHPlRjLmt38Orpf3w0yyEdTYQAs0w_SY14N9kYaXRWHYx';
  var latitude = 33.728730399999996;
  var longitude = -84.5703211;
  var radius = 500;

  var yelpAjax = function(){
  $.ajax({
    url: '/api/yelp/oauth2/token',
    method: 'POST',
    data: {
      grant_type: 'client_credentials',
      client_id: 'QvnLXvwXk-VJpWrW_MJ99Q',
      client_secret: 'FyqegEvE9Wf8YKXO3B3ayR0Ay3kTizE8rxruMBV2AkLdTrRwC0Yk36fTkQSkgbXR'
    }
  }).done(function (response) {
    console.log(response);

    // update global variable for your accessToken
    accessToken = response.access_token;

//     $.ajax({
//       url: '/api/yelp/v3/businesses/search?latitude='+33.728719399999996
// +'&longitude='+-84.5703371
// +'&radius='+radius,
//       method: 'GET',
//       headers: {
  $.ajax({ url: link, method: "Get"}).done(function(responseStr) {
    console.log(responseStr);
        // use your access token in every API request to proxy
        Authorization: 'Bearer ' + accessToken
        var displayButton = $("<button>");
        var restaurantTitle = $("<h2>").text();
        var restaurantReview = $("<h3>");
        var restaurantPrice = $("<div>");
        var restaurantImage = $("<img>");

      
    }).done(function (response) {
      // $('#autocomplete').html(JSON.stringify(response, null, 2));
      console.log(response);
    });
  }).fail(function (err) {
    console.error(err);
  });
}

yelpAjax(link);
//Grabs the current position of the user
  function onPositionReceived(position){
    console.log(position);
  }

  function userLatitude(position){
    console.log("latitude "+position.coords.latitude);
  }

  function userLongitude(position){
    console.log("longitude "+position.coords.longitude);
  }
//If the browser support geoloaction then get 
//the location
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onPositionReceived);
    navigator.geolocation.getCurrentPosition(userLatitude);
    navigator.geolocation.getCurrentPosition(userLongitude);
  }

  $('.btn').on('click', function(){
  $('#food2fork').empty();
  var userValue = $('textarea').val().replace(' ', ' ');
  //Validation
  if (userValue !== '') { 
    var link = 'https://gt-api-proxy.herokuapp.com/api/food2fork/search?key=1f35aa9b21774c9228255e0d0e0844f2&q='+ userValue;
      runAjax(link);  
  }

  //empty text after userinput
  $('textarea').val('');
 console.log("Hello WOrld");
});
//Connect link with button to display options//

