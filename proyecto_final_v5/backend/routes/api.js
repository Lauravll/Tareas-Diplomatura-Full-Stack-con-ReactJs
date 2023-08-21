var express = require('express');
var router = express.Router();
var mascotasModel = require('./../models/mascotasModel');
var cloudinary = require('cloudinary').v2;

router.get('/mascotas', async function (req, res, next) {
  let mascotas = await mascotasModel.getMascotasWithDetails();

  mascotas = mascotas.map(mascota => {
    if (mascota.img_id) {
      const imagen = cloudinary.url(mascota.img_id, {
        width: 900,
        height: 400,
        crop: "fit"
      });
      return {
        ...mascota,
        imagen
      }
    } else {
      return {
        ...mascota,
        imagen: ""
      }
    }
  });
  res.json(mascotas);
});

module.exports = router;