var http = require('http');

http.createServer(function(req,res){
    res.end('Olá mundo! or Hello World!')
}).listen(8082);

console.log("O sevidor estah funcinando!");