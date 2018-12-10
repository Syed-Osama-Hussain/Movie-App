var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/",function(req,res){

    res.render("search");

});



app.get("/results",function(req,res){

    var name = req.query.search;
    request("http://omdbapi.com/?s="+name+"&apikey=53545690", function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            //console.log(results);
           res.render("results",{data: data});
        }
        else{
          console.log("Not found");
        }

    });
});


app.listen("3000",function(){

   console.log("Movie app has started");
});
