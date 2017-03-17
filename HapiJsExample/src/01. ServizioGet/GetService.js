const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 8080, host: 'localhost' });

var objArray = [
    {
        nome: 'Giuseppe',
        cognome: 'Giordano'
    },{
        nome: 'Mario',
        cognome: 'Rossi'
    },{
        nome: 'Giovanno',
        cognome: 'Bianchi'
    }
];

// Espongo un servizio che restituisce tutti gli elementi
server.route({
  method: 'GET'
, path: '/get-elements'
, handler: function(req, reply) {
    reply(objArray);
  }
});

// Espongo un servizio che restituisce gli elementi filtrati per nome 
server.route({
  method: 'GET'
, path: '/get-element/{nome?}'
, handler: function(req, reply) {
    
    var arrayReturn = []

    // ciclo tutti gli elementi ricercando per nome
    for(var i = 0; i < objArray.length; i++) {
        if(req.params.nome == objArray[i].nome){
            arrayReturn.push(objArray[i]);
        }
    }

    // se non ho trovato nulla restituisco un messaggio custom
    if(arrayReturn.length == 0){
        return reply('Nessun elemento trovato');
    }
    else{
        reply(arrayReturn);
    }
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});