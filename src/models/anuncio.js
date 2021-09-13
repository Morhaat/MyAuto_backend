const mongoose = require('mongoose');

const AnuncioSchema = new mongoose.Schema({
    id_usuario:String,
    usuario:String,
    ativo:Boolean,
    data_anuncio:Date,
    titulo:String,
    veiculo:{
        fipe_codigo:String,
        marca: {
            codigo:String,
            caption:String,
            link:String
        },
    	modelo: {
            codigo:String,
            caption:String,
            link:String
        },
	    ano_modelo: {
            codigo:String,
            caption:String,
            link:String
        },
    	combustivel: String,
    	preco_venda: Number,
	    data_venda: Date,
	    venda_plataforma: Boolean,
	    kilometragem: Number,
        cor:String,
	    descricao:String,
    },
    fotos:{}

})

module.exports = mongoose.model('Anuncio',AnuncioSchema);

/*
    
    */