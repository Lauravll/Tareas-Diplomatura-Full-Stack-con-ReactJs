var express = require('express');
var router = express.Router();
var mascotasModel = require('./../../models/mascotasModel');
  
/* GET home page. */
router.get('/', async function (req, res, next) {

  var data = await mascotasModel.getMascotasWithDetails();

  res.render('admin/mascotas', {
    layout: '/admin/layout',
    persona: req.session.nombre,
    title: 'Buscador de Mascotas'
  });
});

module.exports = router;