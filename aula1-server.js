var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	//response.write("<h1>Hello World!</h1><br /><br /><h3>Primeira Aula de Node.js</h3><p> :D </p>");
	response.write("<h1>Hello World!</h1>");
	response.write("<br />");
	response.write("<h3>Primeira aula de nodejs</h3>");
	response.end();
});

//server.listen(3000); // a porta onde será executado localhost:3000. 

//ou

server.listen(3000,function(){
	console.log('Servidor Hello world rodando!');
});