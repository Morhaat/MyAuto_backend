const Anunciante = require('../models/anunciante');

module.exports = {

async index(request, response){
    const preTeste = request.body;
    const {usuario, senha} = request.body; 
    try{
        if (Object.keys(preTeste).length === 0){
        return response.json({
            value:false,
            dados:"Falha",
            caso:"Ausência de dados",
        });   
            }
        else{
        let login = await Anunciante.findOne({usuario, senha});
        if(!login){
            return response.json({
                value:false,
                dados:"Falha",
                caso:"Usuário não existe!",
            });    
        }
        else{
            const {_id, usuario, premium, telefone1, telefone2} = login;
            return response.json({
                value:true,
                login: {
                    _id,
                    usuario,
                    premium,
                    telefone1,
                    telefone2
                }
            });     
        }
        }
    }catch{
        return response.json({
            value:false,
            dados:"Falha",
            caso:"Sistema não responde",
        });
    }
},

async store(request, response){
    const preTeste = request.body;
    if (Object.keys(preTeste).length === 0){
    return response.json({
        value:false,
        dados:"Falha",
        caso:"Ausência de dados",
    });   
    }
    else{
    const {nome, email, usuario, senha, premium, telefone1, telefone2} = request.body;
    let cadAnunciante = await Anunciante.findOne({email});
    try{
        if (!cadAnunciante){
            let usuAnunciante = await Anunciante.findOne({usuario});
            if(!usuAnunciante){
                    cadAnunciante = await Anunciante.create({
                        nome,
                        email,
                        usuario,
                        senha,
                        premium,
                        telefone1:{
                            numero: telefone1.numero,
                            whatsapp: telefone1.whatsapp
                        },
                        telefone2:{
                            numero: telefone2.numero,
                            whatsapp: telefone2.whatsapp
                        }
                    })
                    return response.json({
                        value:true,
                        dados:"Novo",
                        caso:"Ok",
                    });
            }
            else{
                return response.json({
                    value:false,
                    dados:"Existente",
                    caso:"Usuário",
                });
            }
        }
        else{
            return response.json({
                value:false,
                dados:"Existente",
                caso:"Email",
            });
        }
    }
    catch{
        return response.json({
            value:false,
            dados:"Falha",
            caso:"Sistema não responde",
        });
    }
    }  
}





}