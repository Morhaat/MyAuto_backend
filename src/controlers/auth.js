const jwt = require('jsonwebtoken');

module.exports ={
    async validating(request, response){
        const [hashType, hash] = request.headers.authorization.split(' ');
        const validaToken = jwt.verify(hash, process.env.cryptoJwt, (err, user)=>{
            if(err){
                return response.sendStatus(403)
            }
            else{
                return response.json(user);
            }  
        });
    }
}