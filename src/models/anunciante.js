const mongoose = require('mongoose');

const AnunciantesSchema = new mongoose.Schema({
    nome: String,
    email: String,
    usuario:String,
    senha:String,
    premium:Boolean,
    telefone1:{
        numero:String,
        whatsapp:Boolean,
    },
    telefone2:{
        numero:String,
        whatsapp:Boolean,
    },
})

module.exports = mongoose.model('Anunciantes',AnunciantesSchema);