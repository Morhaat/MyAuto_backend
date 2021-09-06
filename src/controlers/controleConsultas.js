const ctrlConsultas = require("../models/controleConsultas");
const routes = require('../routes');

module.exports = {async store(request, response){
    const idUsuario = routes.idUsuario;

    let findUsuario = await ctrlConsultas.findOne(idUsuario);
    console.log(idUsuario);
    if (!findUsuario){
        findUsuario = await ctrlConsultas.create({
            idUsuario,
            qtdConsulta:"1",
            dataControle:Date.now(),
        })
    return response.json({
        value:true,
        dados:"Novo"
    });
    }
    else{
        if(qtdConsulta < 5){
            findUsuario = ctrlConsultas.updateOne(routes.idUsuario, {
            $set: {
                qtdConsulta: qtdConsulta+1,
                dataControle: Date.now()
            }
            });
            return response.json({
            value:true,
            dados:"Alterado"
            });
        }
        else{
            return response.json({
            value:false,
            dados:"Excedeu o máximo permitido"});
        }
    }
}
}