// var queryURL = "http://food2fork.com/api/search?key=ff84bc9ded705856321486ca38126b53&q=shredded%20chicken";

//    $.ajax({
//      url: queryURL,
//      method: 'GET',
//      crossDomain: true,
//      dataType: 'json',
//     beforeSend: function(request) {
//         request.setRequestHeader('Access-Control-Allow-Origin', 'x-request-head');
//         console.log(request);
//       },
//    }).done(function(response) {
//      console.log(response);
//    });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#test").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});