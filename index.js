var app = require('./config/express-config')();
var path = require('path')

var port = process.env.port || 8080;


app.get('*',function(req,res){
   res.sendFile(path.join(__dirname+'/app/audiolook/index.html'))
}).listen(port, function(){
    console.log(' Servidor Escutando na porta ====> ' +port)

}); 
