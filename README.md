# NodeJsEsempi
Questo progetto racchiude alcuni esempi di applicazioni sviluppate con NodeJs.

## WebServerBaseNodeJs
Questo progetto contiene alcuni esempi base di creazione di un webserver: <br>
	1. ReadFileService --> Servizio che rimane in ascolto all'indirizzo http://localhost:8080/home e restituisce una pagina html base. Se viene richiamato un altro url il servizio restituisce una pagina di not found. Il servizio utilizza semplicemente il modulo nativo url per gestire l'url sul quale rimanere in ascolto. Per far partire il server è necessario lanciare il comando node ReadFileService.js posizionandosi nella cartella dove è presente il file
	2. CustomModule --> E' stato sviluppato un servizio, che non viene esposto via web, che utilizza un nostro modulo custom che si occupa di sommare due importi. Per lanciarlo è necessario lanciare il comando node MainService.js.

