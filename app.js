// create an express server
var express = require("express");

var app = express(
  express.logger(),
  express.static(__dirname + '/public'),
  express.cookieParser(),

  // set this to a secret value to encrypt session cookies
  express.session({ secret: process.env.SESSION_SECRET || 's1llyc4t' })
);

// listen to the PORT given to us in the environment
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

// respond to GET /
app.get('/', function(request, response) {

  // render the home page
  response.render('index.ejs', {
    layout:   true,
    app:      app
  });

});
