const modelAnuncio = require('../models/anuncio');
var path = require('path');
var Client = require('ftp');

module.exports = {
    async index(request, response){
        let filtros = request.body;
        console.log(request.body);
        let resultFiltro;
        if (Object.keys(filtros).length === 0){
            resultFiltro = await modelAnuncio.find();   
        }
        else{
            //resultFiltro = await modelAnuncio.findOne(filtros);
            resultFiltro = await modelAnuncio.find(filtros);  
        }
        return response.json({resultFiltro});

    },

    async store(request, response){
        const {id_anunciante, ativo, data_anuncio, titulo, veiculo, fotos} = request.body;
        console.log('Entrando...');
        console.log(fotos);
        console.log(fotos.File);

            if (!fotos){
                console.log({error:"NoFile"});
            }
            else{
                //if(path.extname(fotos.File.name) == '.jpg' || path.extname(fotos.File.name) == '.jpeg' ){
                    var c = new Client();
                    console.log('Inicia o Client...');  
                    c.on('ready', function() {
                        c.put(fotos.Url, '/_photos/fotos1', function(err) {
                        console.log('Put...');
                        if (err) throw err;
                        c.end();
                        });
                    });
                // connect to localhost:21 as anonymous
                    c.connect({
                        user:"Morhaat",
                        password: "1234"
                    });
                    console.log('Conecta...');
                /*}
                else{
                    console.log({error: 'Invalid File'});
                }*/
            }

        const cadAnuncio = await modelAnuncio.create({
            id_anunciante,
            ativo,
            data_anuncio,
            titulo, 
            veiculo:{
                fipe_codigo: veiculo.fipe_codigo,
                marca: {
                    codigo:veiculo.marca.codigo,
                    caption:veiculo.marca.caption,
                    link:veiculo.marca.link
                },
    	        modelo: {
                    codigo:veiculo.modelo.codigo,
                    caption:veiculo.modelo.caption,
                    link:veiculo.modelo.link
                },
	            ano_modelo: {
                    codigo:veiculo.ano_modelo.codigo,
                    caption:veiculo.ano_modelo.caption,
                    link:veiculo.ano_modelo.link
                },
    	        combustivel: veiculo.combustivel,
    	        preco_venda: veiculo.preco_venda,
	            data_venda: veiculo.data_venda,
	            venda_plataforma: veiculo.venda_plataforma,
	            kilometragem: veiculo.kilometragem,
                cor: veiculo.cor,
	            descricao: veiculo.descricao,
            },
            fotos: 'uploadFoto1',
        })
            return response.json({
                value:true,
                dados:"Novo",
                caso:"Ok",
            });
    }
}