var http 	= require('http');
var arquivo = require('fs');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Contet-Type":"text/html"});

	if(request.url == '/'){
		response.write("<h1>Pagina Principal</h1>");
	}else if(request.url == '/contato'){
		response.write("<h1>Pagina contato</h1>");
	}else if(request.url == '/clientes'){
		response.write("<h1>Pagina clientes</h1>");
	}else{
		response.write("<h1>Pagina nao encontrada!!<h1>");
	}
	var txt = arquivo.createWriteStream('./arquivos/logs.txt',{flags : 'a'});
	txt.write(request.url+'\n');
	response.end();
});

server.listen(3000,function(){
	console.log("Aula 2 - Servidor Rodando!");
});