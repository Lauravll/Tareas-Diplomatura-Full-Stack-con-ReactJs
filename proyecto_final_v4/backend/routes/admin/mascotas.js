var express = require('express');
var router = express.Router();
var mascotasModel = require('./../../models/mascotasModel');
  
router.get('/', async function (req, res, next) {

  const mascotas = await mascotasModel.getMascotasWithDetails();

  res.render('admin/mascotas', {
    layout: '/admin/layout',
    persona: req.session.nombre,
    title: 'Buscador de Mascotas',
    mascotas: mascotas
  });
});

router.get('/agregar', async (req, res, next) => {
  try {
    res.render('admin/agregar', {
      layout: '/admin/layout',
      title: 'Buscador de Mascotas'
    });
  } catch (error) {
    
  }
})

module.exports = router;