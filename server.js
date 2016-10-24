// include http module
var http = require('http');

// declare 1st port
var PORT1 = 7000;

// declare 2nd port
var PORT2 = 7500;

// function to handle request on 1st port
function handleRequests1(request, response){
  response.end('You are an awesome person!');
}

// function to handle request on 2nd port
function handleRequests2(request, response){
  response.end('You are a horrible person... sorry');
}

var server1 = http.createServer(handleRequests1);
var server2 = http.createServer(handleRequests2);

// Listen on port 7000 and console log message
server1.listen(PORT1, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT1);
});

// Listen on port 7500 and console log message
server2.listen(PORT2, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT2);
});