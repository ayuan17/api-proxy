// GLOBAL var for access token
var accessToken = 'idjxhcB3KwhpsFabfL5wANG4FdopC8mezW41HlWrEcGJt52yPF…iEtBHHPlRjLmt38Orpf3w0yyEdTYQAs0w_SY14N9kYaXRWHYx';
var latitude = 33.728730399999996;
var longitude = -84.5703211;
var radius = 500;

var yelpAjax = function() {
    $.ajax({
        url: '/api/yelp/oauth2/token',
        method: 'POST',
        data: {
            grant_type: 'client_credentials',
            client_id: 'QvnLXvwXk-VJpWrW_MJ99Q',
            client_secret: 'FyqegEvE9Wf8YKXO3B3ayR0Ay3kTizE8rxruMBV2AkLdTrRwC0Yk36fTkQSkgbXR'
        }
    }).done(function(response) {
        console.log(response);

        // update global variable for your accessToken
        accessToken = response.access_token;

        $.ajax({
            url: '/api/yelp/v3/businesses/search?latitude=' + 33.7764431 + '&longitude=' + -84.3899786 + '&radius=' + radius,
            method: 'GET',
            headers: {
                // use your access token in every API request to proxy
                Authorization: 'Bearer ' + accessToken
            }
        }).done(function(response) {
            for (var i = 0; i < response.businesses.length; i += 1) {
                var eatOut = $("<div class='mySlides'>");
                var restaurantTitle = $("<h2>").text(response.businesses[i].name);
                var restaurantReview = $("<h3>").text(response.businesses[i].rating + " Stars Out Of 5");
                var restaurantPrice = $("<div>").text(response.businesses[i].price);
                var restaurantImage = $("<img class='images fade'>");
                restaurantImage.attr({
                    src: response.businesses[i].image_url
                });
      
                eatOut.append(eatOut);
                eatOut.append(restaurantImage);
                eatOut.append(restaurantTitle);
                eatOut.append(restaurantReview);
                eatOut.append(restaurantPrice);

                $('#eat-out').append(eatOut);
            }
            // console.log(restaurantTitle);

            // $('#autocomplete').html(JSON.stringify(response, null, 2));
            console.log(response);
        });
    }).fail(function(err) {
        console.error(err);
    });
}

yelpAjax();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}
//Grabs the current position of the user
function onPositionReceived(position) {
    console.log(position);
}

function userLatitude(position) {
    console.log("latitude " + position.coords.latitude);
}

function userLongitude(position) {
    console.log("longitude " + position.coords.longitude);
}
//If the browser support geoloaction then get 
//the location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionReceived);
    navigator.geolocation.getCurrentPosition(userLatitude);
    navigator.geolocation.getCurrentPosition(userLongitude);
}

$('#btn').on('click', function() {
    console.log("Hello Word");
    nextImg()
});
//Connect link with button to display options//
