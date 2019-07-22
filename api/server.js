const express = require('express');
const request = require("request");
const cors = require('cors');
const fs = require('fs');
const port = 4000;
const app = express();

app.use(cors());

// Start server on port
app.listen(port,() =>{ console.log("Server started on Port " + port);});

// Flickr public feed api
const url = "https://api.flickr.com/services/feeds/photos_public.gne?nojsoncallback=1&format=json";

app.get('/',function(req,res){
  res.send("Welcome to feeds API.");
  });
app.get('/getfeeds',function(req, res){
    request({
      method: 'GET',
      uri: url
    }, function(error, response, body){
      // res.send(response.data);
      if (!error && response.statusCode == 200)
      {
            res.statusCode = 200;
            res.setHeader('Content-type','text/json');
            res.send(body);
            res.end();
      }
  })
});
