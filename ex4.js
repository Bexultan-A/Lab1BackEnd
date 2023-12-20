const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
  } 
  // Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)
  // Covert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title) // Print: Ego is the Enemy

var http = require('http'); 

http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end(bookObject.title); 
}).listen(3000);