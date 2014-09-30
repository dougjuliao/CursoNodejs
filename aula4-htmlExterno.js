var http = require('http'),
	arquivo = require('fs');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	if(request.url == '/'){
		arquivo.readFile(__dirname+'/arquivos/index.html',function(err,html){ //__dirname pega o diretório atual do projeto
			if(err) response.write('Arquivo index.html não encontrado!');
			response.write(html);
			response.end();
		});
	}else if(request.url == '/contato'){
		arquivo.readFile('./arquivos/contato.html',function(err,html){
			if(err) response.write('Arquivo index.html não encontrado!');
			response.write(html);
			response.end();
		});
	}else{
		response.write('Página não encontrada.');
		response.end();
	}
	
});

server.listen(3000,function(){
	console.log('Servidor Rodando');
	console.log(__dirname);
});
