var app = require('./config/express-config')();

var port = process.env.port || 3000;


app.get('/',function(req,res){
    res.end('./app/index.html')
})

app.listen(port); 

console.log(' Servidor Escutando na porta ====> ' +port)
