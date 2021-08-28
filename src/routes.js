const {Router} = require('express');
const controlANC = require('./controlers/controlANC');
const controleConsultas = require('./controlers/controleConsultas');
const controlAnuncios = require('./controlers/controlAnuncios');
const uploadFotos = require('./controlers/controlUploadFotos');


const routes = Router();

routes.post('/upload', uploadFotos.UploadToFtp);
routes.get('/list', uploadFotos.ListArquivos);
routes.get('/login', controlANC.index);
routes.get('/anuncios', controlAnuncios.index);
routes.post('/cadastro', controlANC.store);
routes.put('/controleConsultas', controleConsultas.store);
routes.post('/cadastroAnuncio', controlAnuncios.store)
module.exports = routes;