User Object:

const User = {
    name: "Bexultan",
    age: 19
}
Defines a simple user object with a name and age.

Required Modules:

var http = require('http');
fs = require('fs');
Imports the required Node.js modules - http for creating the server and fs for reading files.

serveStaticFile Function:
function serveStaticFile(res, path, contentType, responseCode) { 
    // ... function implementation ...
}
A function to serve static files. It reads the file specified by the path parameter and sends it as a response with the specified content type and response code.

HTTP Server Creation:

http.createServer(function(req,res){
    // ... server logic ...
}).listen(3000);
Creates an HTTP server. The server listens on port 3000 and handles incoming requests with the provided callback function.

Request Handling:

var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
switch(path) { 
    // ... request handling cases ...
}
Parses the requested URL and uses a switch statement to handle different paths. It either serves static files or responds with user data based on the requested path.

Handling Different Paths:

For the root path (''), it serves the home page.
For the /user path, it responds with the User.name.
For the /about path, it serves the about page.
For any other path, it serves a 404 error page.
