var express = require("express");
var port = 27015 || process.env.PORT;
var app = express();
var http = require("http").Server(app);

http.listen(port, function (){

    console.log("The server is now running on port " + port + "\n");
    //Once the server has started, notify the console of the new process.

});

//Serve /public/
app.use(express.static(__dirname + "/public/"));

app.get("/", function(request, response){
    //When a user connects, send them a file:
    response.sendFile(__dirname + "/index.html");
});