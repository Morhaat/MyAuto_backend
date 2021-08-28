const mongoose = require('mongoose');

const AnunciantesSchema = new mongoose.Schema({
    nome: String,
    cpf_cnpj:String,
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
    endereco: {
        rua: String,
        bairro: String,
        cidade: String,
        estado: String,
        numero: String,
        cep: String,
    },
})

module.exports = mongoose.model('Anunciantes',AnunciantesSchema);