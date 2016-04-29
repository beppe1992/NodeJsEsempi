// importo il modulo nativo di node per gestiore il filesystem
var fs = require('fs') ;
// creo un server http che rimane in ascolto sulla porta 8080
var app = require('http').createServer(mainHandler).listen(8080) ;
console.log("Server is up and running") ;
// importo il modulo nativo per gestire l'url
var url = require("url") ;


function mainHandler(req, res) {
  var path = url.parse(req.url).pathname ;
  console.log("Server parsed path: "  + path) ;
  switch (path) {
    case '/home':
     fs.readFile(__dirname + '/Prova.html', function (err, content) {
      // se non lo trovo restituisco un errore 404
      if (err) {
         pageNotFound(res) ;
      }
      // restituisco il file
      res.writeHead(200) ;
      res.end(content) ;
    }) ;
    break;
    default: pageNotFound(res) ;
  }
}

// 2nd callback: on failure
function pageNotFound(res) {

  fs.readFile(__dirname + '/PageNotFound.html', function (err, content) {

   // restituisco il file
   res.writeHead(404) ;
   res.end(content) ;
 }) ;
}
