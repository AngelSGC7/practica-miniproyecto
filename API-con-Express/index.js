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
    { id: 1, titulo: 'Sing', genero:'Comedia,Musical', img:'https://m.media-amazon.com/images/I/71qn+csujPL._AC_UF894,1000_QL80_.jpg' },
    { id: 2, titulo: 'Batman', genero:'Suspenso,Accion', img:'https://im.ziffdavisinternational.com/ign_es/screenshot/default/batmancartelnoti_e8vk.jpg' },
    { id: 3, titulo: 'Deadpool', genero:'Humor Crudo,Accion', img:'https://cdn.marvel.com/content/1x/deadpool_lob_crd_02.jpg' },
    { id: 4, titulo: 'Wonka', genero:'Musical,Comedia', img:'https://peru21.pe/resizer/dmiixk0tEK-iuFvM4nDPkkB8xVI=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YLYVIAIB7FHQTMIJ3TVELKECQM.jpeg' },
    { id: 5, titulo: 'Geo-tormenta', genero:'Catastrofe,Sobrenatural', img:'https://image.tmdb.org/t/p/w500/6R4IyFqcQv8T4BmBdTyEb1ptXr3.jpg' },
    { id: 6, titulo: 'John Wick', genero:'Accion,Suspenso', img:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/john-wick-pacto-de-sangre/120113874-1-esl-ES/John-Wick-Pacto-de-sangre.png' }
];

app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

