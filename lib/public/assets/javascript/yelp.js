  // GLOBAL var for access token
  var accessToken = 'idjxhcB3KwhpsFabfL5wANG4FdopC8mezW41HlWrEcGJt52yPF…iEtBHHPlRjLmt38Orpf3w0yyEdTYQAs0w_SY14N9kYaXRWHYx';
 

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

    $.ajax({
      url: 'https://api.yelp.com/v3/businesses/search',
      method: 'GET',
      headers: {
        // use your access token in every API request to proxy
        Authorization: 'Bearer ' + accessToken
      }
    }).done(function (response) {
      // $('#autocomplete').html(JSON.stringify(response, null, 2));
      console.log(response);
    });
  }).fail(function (err) {
    console.error(err);
  });

//   App ID
// QvnLXvwXk-VJpWrW_MJ99Q
// App Secret
// FyqegEvE9Wf8YKXO3B3ayR0Ay3kTizE8rxruMBV2AkLdTrRwC0Yk36fTkQSkgbXR


// API v2.0
// Consumer Key  grEPFbLO7ScXxgZa89U8jQ
// Consumer Secret 9KIgkm34GKIGZrhT98L5841FJrU
// Token h-v4rcQrAmphvWQrdljh24_ZXeEVfloH
// Token Secret  uP3clFz6X0GpX1VRx9DCM_5yAE8