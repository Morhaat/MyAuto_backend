var path = require('path');
var Client = require('ftp');
 
module.exports = {
    UploadToFtp(request, response){
        const {upload} = request.body;
        if (!upload){
            return response.json({error:"NoFile"});
        }
        else{
            if(path.extname(upload.name) == '.jpg' || path.extname(upload.name) == '.jpeg' ){
                var c = new Client();  
                c.on('ready', function() {
                    c.put(upload, '/_photos/'+upload.name, function(err) {
                    if (err) throw err;
                    c.end();
                    });
                });
            // connect to localhost:21 as anonymous
                c.connect({
                    user:"Morhaat",
                    password: "1234"
                });
                return response.json({status:true});
            }
            else{
                return response.json({error: 'Invalid File'});
            }
        }

    },

    ListArquivos(request, response){

        const {upload} = request.body;
        if (!upload){
            return response.json({error:"NoFile"});
        }
        else{
            var c = new Client();  
            c.on('ready', function() {
                c.list('/',function(err, list) {
                if (err) throw err;
                console.dir(list);
                c.end();
                return response.json(list);
                });
            });
        // connect to localhost:21 as anonymous
            c.connect({
                user:"Morhaat",
                password: "1234"
            });
        }
    }
}