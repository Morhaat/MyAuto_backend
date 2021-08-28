const mongoose = require('mongoose');

const controleAnuncioSchema = new mongoose.Schema({
    id_anunciante:String,
    anuncios_ativos:Number,
    anunciados:Number,   
})

module.exports = mongoose.model('controleAnuncio',controleAnuncioSchema);