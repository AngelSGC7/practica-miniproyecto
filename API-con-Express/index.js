/*const http = require ('node:http') 
//const {findAvailablePort} = require('./10.freeport.js')// Nota:asi hago que busque un puerto disponible en mi compu :D//

const port = process.env.PORT ?? 7777

const server = http.createServer ((req,res)=>{
    console.log('request recibida')
    res.end('holaMundo')
})

server.listen(port, ()=>{
    console.log(`server listening on port http.//:localhost:${port}`)
})
video de Api y nodemon *REPASO* https://www.youtube.com/watch?v=YmZE1HXjpd4*/

/* otro repaso corto
const require ('node:http')

const processRequest = (req,res) => {
    const ( method , url ) = req

    switch (method){
        case ("GET"):
            switch(url){
                case '/':
                    res.setHeader('Content-Type', 'text/html'; 'charset=utf-8')
                    res.end('<h1>Api</h1>')
            }
    }
}
const server = http.createServer (processRequest)

server.listen(7777, ()=>{
    console.log ("server listening on port http://localhost:7777")
})*/
//inicio API con express siempre antes instalar *npm install express *//

const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors())

const peliculas = [
    { id: 1, titulo: 'Sing', genero:'Comedia', img:'' },
    { id: 2, titulo: 'Batman', genero:'Suspenso', img:'' },
    { id: 3, titulo: 'Deadpool', genero:'Humor Crudo', img:'' },
    { id: 4, titulo: 'Wonka', genero:'Musical', img:'' },
    { id: 5, titulo: 'Geo-tormenta', genero:'Catastrofe', img:'' }
];

app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

