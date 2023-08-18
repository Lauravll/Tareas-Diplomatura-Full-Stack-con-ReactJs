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

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.nombre_mascota != "") {
      await mascotasModel.insertMascota(req.body);
      res.redirect('/admin/mascotas')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: "Todos los campos son requeridos"
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: "No se cargó la mascota"
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id //Para capturar el id
  await mascotasModel.deleteMascotaById(id);
  res.redirect('/admin/mascotas')
})

module.exports = router;