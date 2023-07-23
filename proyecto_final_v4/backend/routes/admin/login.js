var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /* Carpetad entro de views */
  res.render('admin/login', {
    layout: '/admin/layout',
    title: 'Buscador de Mascotas' 
  });
});

module.exports = router;
