var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//adiciona rota no servidor para o upload
router.post('/upload', (req, res)=>{


  // envia os arquivos para a pasta upload 
  let form = new formidable.IncomingForm({
    uploadDir: './upload',  // direciona para pasta
    keepExtentions: true   // mantem a extensão do arquivo 
  }); 
  
  form.parse(req, (err, fields, files )=> {

    console.log(files)
    console.log(fields)

    res.json({

    files

       
    });


  });


});


module.exports = router;
