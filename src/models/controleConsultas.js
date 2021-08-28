const mongoose = require('mongoose');

const ControleConsultasSchema = new mongoose.Schema({
    idUsuario: String,
    qtdConsulta: {
        fipe:Number,
        anuncios:Number
    },
    dataControle: Date
})

module.exports = mongoose.model('ControleConsultas',ControleConsultasSchema);