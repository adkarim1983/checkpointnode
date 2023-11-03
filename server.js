//création  d'un serveur  
//  Programme qui s'exécute sur le port 3000 et  qui répond par '<h1>Hello Node!!!!</h1>\n' lorsque quelqu'un atteint http://localhost:3000
var http = require("http");
http.createServer(function (request, response) {
    // On a  défini le Content-Type sur "text/html", car le contenu que nous allons renvoyer est en réalité du texte HTML, pas du texte brute.
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    
    response.end('<h1>Hello Node!!!!</h1>\n');
 }).listen(3000);
 
 
 console.log('Server running at http://127.0.0.1:3000/');