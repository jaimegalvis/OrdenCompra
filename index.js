const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('ruta: ',req.url);
    // switch(req.url){
    //     case '/':

    //     case'/':


    // }



}).listen(4000,()=>{
    console.log('servidor operativo en el puerto 4000')
});
