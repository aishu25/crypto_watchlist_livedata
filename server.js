var express = require("express");
var app = express();
var port = 8000;
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(session({secret: 'thisissecret'}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get("/", function(request, response){
	response.render("index");
});

var server = app.listen(port, function(){
	console.log("Listening on 8000 port for bitcoin live project");
});

var io = require("socket.io").listen(server);

io.sockets.on("connection",function(socket){
	console.log("Client/Server is connected for project!"); //displayed in the terminal
	console.log("Client/Server id is: ", socket.id);
});