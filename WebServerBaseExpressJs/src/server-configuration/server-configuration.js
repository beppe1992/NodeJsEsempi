var expressImport = require('express');
var express = expressImport();
var path = require('path');

exports.configureServer = function(){

	// espongo le cartelle webapp e node_modules via http in modo da poter raggiungere le risorse web ed utilizzare l'applicazione anguarjs
	express.use('/webapp',expressImport.static(path.join(__dirname, '../../webapp')));
	express.use('/node_modules',expressImport.static(path.join(__dirname, '../../node_modules')));

	express.listen(8080);
}
