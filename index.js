const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('ruta: ',req.url);
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-type':'application/json'})
            // res.statusCode(200);
            // res.statusMessage('Todo bien');
            res.end(JSON.stringify('hola mundo'));
            break;

        // case'/':

        default:
            res.writeHead(200,{'Content-type':'text/plain'})
            // res.statusCode(404);
            res.end('No encontrado')

    }



}).listen(4061,()=>{
    console.log('servidor operativo en el puerto 4061')
});
