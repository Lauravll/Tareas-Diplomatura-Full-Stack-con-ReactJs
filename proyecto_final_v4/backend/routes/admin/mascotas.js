var express = require('express');
var router = express.Router();
var mascotasModel = require('./../../models/mascotasModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);

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

    console.log('imagen'+ req.files.imagen)
    var img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.nombre_mascota != "") {
      await mascotasModel.insertMascota({
        ...req.body,
        img_id
      });
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

router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id //Para capturar el id
  var mascota = await mascotasModel.getMascotadByIdWithDetails(id);
  res.render('admin/modificar', {
    layout: "admin/layout",
    mascota: mascota
  })
})

router.post('/modificar', async (req, res, next) => {
  try {

    var obj = {
      nombre_mascota: req.body.nombre_mascota,
      raza: req.body.raza,
      ojos: req.body.ojos,
      pelaje_color: req.body.pelaje_color,
      pelaje_tipo: req.body.pelaje_tipo,
      tamanio: req.body.tamanio,
      otras_caracteristicas: req.body.otras_caracteristicas,
      perdido: req.body.perdido
    }

    console.log(obj, req.body.id_mascota);

    await mascotasModel.modifyMascotaById(obj, req.body.id_mascota);
    res.redirect('/admin/mascotas');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: "admin/layout",
      error: true,
      message: "No se modificó la mascota"
    })
  }
})

module.exports = router;