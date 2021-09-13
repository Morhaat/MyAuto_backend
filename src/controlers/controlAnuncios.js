const modelAnuncio = require('../models/anuncio');

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
        console.log(request.size);
        const {id_usuario, usuario, ativo, data_anuncio, titulo, veiculo, fotos} = request.body;
        console.log(fotos);

        try{
            const cadAnuncio = await modelAnuncio.create({
                id_usuario,
                usuario,
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
                fotos:{
                    foto1: fotos.foto1,
                    foto2: fotos.foto2,
                    foto3: fotos.foto3,
                    foto4: fotos.foto4,
                    foto5: fotos.foto5,
                },
            })
                return response.json({
                    value:true,
                    dados:"Novo",
                    caso:"Ok",
                });
        }
        catch(e) { 
            console.error(e);
            return response.json({
                value:false,
                dados:  error(e),
                caso:"Erro!",
            });    
        }
    }
}