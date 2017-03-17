# NodeJsEsempi
Questo progetto racchiude alcuni esempi di applicazioni sviluppate con NodeJs descritti nei successivi paragrafi.<br>
Per utilizzare ogni singolo progetto è necessario lanciare il comando npm init all'interno di ognuno.<br>

## WebServerBaseNodeJs
Questo progetto contiene alcuni esempi base di creazione di un webserver: <br>
	1. ReadFileService --> Servizio che rimane in ascolto all'indirizzo http://localhost:8080/home e restituisce una pagina html base. Se viene richiamato un altro url il servizio restituisce una pagina di not found. Il servizio utilizza semplicemente il modulo nativo url per gestire l'url sul quale rimanere in ascolto. Per far partire il server è necessario lanciare il comando node ReadFileService.js posizionandosi nella cartella dove è presente il file

## ModuleExportNodeJs
Questo progetto contiene alcuni esempi base di iterazione tra moduli custom della nostra applicazione: <br>
	1. E' stato sviluppato un servizio, non esposto via web, che utilizza un nostro modulo custom che si occupa di sommare due importi. Per lanciarlo è necessario lanciare il comando node MainService.js.

## HapiJsExample
Questo progetto contiene alcuni esempi base di servizi REST implementati con HapiJs e NodeJs: <br>
	1. Semplice servizio REST che risponde all'url http://localhost:8080/get-elements e restituisce una lista semplice di elementi. Per far partire il server è necessario lanciare il comando node GetService.js posizionandosi nella cartella dove è presente il file. <br>
	2. Semplice servizio REST che risponde all'url http://localhost:8080/get-element/{nome} e restituisce una lista semplice di elementi filtrando per il nome passato nell'url. Per far partire il server è necessario lanciare il comando node GetService.js posizionandosi nella cartella dove è presente il file. <br>
	