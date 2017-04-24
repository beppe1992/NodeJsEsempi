var serverConfiguration = require('./server-configuration/server-configuration.js');
var services = require('./services/services.js');

// richiamo la funzionalità per configurare il server
serverConfiguration.configureServer();

serverConfiguration.configureEndpoint('/services', services.router);

