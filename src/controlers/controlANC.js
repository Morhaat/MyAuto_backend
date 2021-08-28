const Anunciante = require('../models/anunciante');
const crypto = require('crypto');

module.exports = {

async index(request, response){
    
},

async store(request, response){
    const {nome, cpf_cnpj, email, usuario, senha, premium, telefone1, telefone2, endereco} = request.body;

    let cadAnunciante = await Anunciante.findOne({cpf_cnpj});

    if (!cadAnunciante){
        let usuAnunciante = await Anunciante.findOne({usuario});
        if(!usuAnunciante){
            let mailAnunciante = await Anunciante.findOne({email});
            if (!mailAnunciante){
                cadAnunciante = await Anunciante.create({
                    nome,
                    cpf_cnpj,
                    email,
                    usuario,
                    senha: crypto.createHash('md5').update(senha).digest('hex'),
                    premium,
                    telefone1,
                    telefone2,
                    endereco,
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
                    caso:"Email",
                });
            }
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
            caso:"Cpf_Cnpj",
        });
    }  
}
}