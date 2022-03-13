const jwt = require('jsonwebtoken');

module.exports ={
    async validating(request, response){
        const [hashType, hash] = request.headers.authorization.split(' ');
        const [userId, token] = Buffer.from(hash, 'base64').toString().split(':');
        const validaToken = jwt.verify(token, process.env.cryptoJwt, (err, user)=>{
            if(err){
                return response.sendStatus(403)
            }
            else{
                return response.json(user);
            }  
        });
    }
}