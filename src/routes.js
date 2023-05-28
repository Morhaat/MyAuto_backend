const {Router} = require('express');
const controlANC = require('./controlers/controlANC');
const controleConsultas = require('./controlers/controleConsultas');
const controlAnuncios = require('./controlers/controlAnuncios');
const uploadFotos = require('./controlers/controlUploadFotos');
const verifyToken = require('./controlers/auth');


const routes = Router();

routes.post('/upload', uploadFotos.UploadToFtp);
routes.get('/list', uploadFotos.ListArquivos);
routes.get('/login', controlANC.index);
routes.get('/singing', controlANC.index);
routes.get('/validating', verifyToken.validating);
routes.get('/anuncios', controlAnuncios.index);
routes.post('/cadastro', controlANC.store);
routes.put('/controleConsultas', controleConsultas.store);
routes.post('/cadastroAnuncio', controlAnuncios.store);
routes.get('/teste', (request, response)=>{
    return response.send('Respondendo apenas um teste!')});
module.exports = routes;