const mongoose = require('mongoose');

const logUsuarioSchema = new mongoose.Schema({
    id: String,
    qtdConsultas:{
        fipe:Number,
        anuncios:Number
    },
    periodo: Date,
    anuncios:{
        totalLancados:Number,
        totalVisualizados:Number,
        vendidosPelaPlataforma:Number
    },
})

module.exports = mongoose.model('logUsuario',logUsuarioSchema);