var express = require('express');
var request = require("request");
var cors = require('cors');
var fs = require('fs');
var router = express.Router();
var xml2js = require('xml2js');
const port = 4000;
var app = express();

app.use(cors());
var parser = xml2js.Parser();
const _dir = "data"
// Start server on port
app.listen(port,() =>{ console.log("Server started on Port " + port);});

// Flickr public feed api
const url = "https://api.flickr.com/services/feeds/photos_public.gne";

app.get('/',function(req,res){
  res.send("Welcome to feeds API.");
  });
app.get('/getfeeds',function(req, res){
    request({
      method: 'GET',
      uri: url
    }, function (error, response, body){
      // res.send(response.data);
      if (!error && response.statusCode == 200)
      {
/*         fs.writeFile(_dir + "/feeds.xml",body,function(err){
          if(err) throw err
          console.log("XML File Saved");
        });
 */     
        parser.parseString(body,function(err,data)
        {
          // Create a new data.json synchronously
          fs.writeFileSync(_dir + "/feeds.json",JSON.stringify(data),function(err){
          if(err) throw err;
          else
            console.log("Feeds JSON File Saved");
         }); 
        });
       fs.readFile(_dir + "/feeds.json", function(err,data) {
          if (err) throw err
            res.statusCode = 200;
            res.setHeader('Content-type','text/json');
            res.send(data);
            res.end();
        })
  
      }
  })
});
