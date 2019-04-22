var app = require('./config/express-config')();

var port = process.env.port || 8080;


app.get('/*',function(req,res){
      res.writeHead(200,{'Content-Type': 'text/html'})

    res.end(__dirname+'/app/audiolook/index.html')
})

app.listen(port); 

console.log(' Servidor Escutando na porta ====> ' +port)
