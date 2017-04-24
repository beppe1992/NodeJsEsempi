var express = require('express');
var router = express.Router();


var listaElementi = [
	{
		id : 1,
		descr : 'descrizione 1'
	},
	{
		id : 2,
		descr : 'descrizione 2'
	},
	{
		id : 3,
		descr : 'descrizione 3'
	},
	{
		id : 4,
		descr : 'descrizione 4'
	}
];
	
router.get('/elementi', function (req, res) {
	
	res.json(listaElementi);
});

router.get('/elementi/elemento/:id', function (req, res) {
	
	let idInput = req.params.id
	
	let filtered = listaElementi.filter((elem) => { return elem.id == idInput });
		
	res.json(filtered);
});

exports.router = router;