/* 
para ler o arquivo preciso utilizar o módulo fs = fs.readFile(filename,[options],callback)
filename STRING
options OBJECT
*/
var arquivo = require('fs');
var path 	= './arquivos/novo.txt';

arquivo.readFile('./arquivos/clubes.txt',function(err , data){
	if(err) throw err;
	console.log(data.toString());
});

arquivo.exists(path,function(resultado){
	if(!resultado){
		arquivo.writeFile(path,'Criando Arquivo com node.js',function(err){
			if(err) throw err;
			console.log('Arquivo Criado com sucesso!');
		});
	}else{
		console.log('Arquivo ja existe!');
	}
});