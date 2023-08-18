var pool = require('./db'); //Llama datos BD
var md5 = require('md5'); 

//Asincronica porque no se en que momento va a entrar el usuario
async function getMascotasWithDetails() {
  try {
    var query = `
      SELECT
        m.id_mascota,
        m.nombre AS nombre_mascota,
        e.nombre AS especie,
        m.raza,
        m.ojos,
        m.pelaje_color,
        m.pelaje_tipo,
        m.tamaño,
        c.id_contacto,
        c.nombre AS nombre_contacto,
        c.apellido AS apellido_contacto,
        c.email,
        c.telefono,
        c.esDuenio,
        u.id_ubicacion,
        l.descripcion AS localidad,
        p.descripcion AS provincia,
        m.fecha_perdido,
        m.fecha_registrado,
        CASE
        WHEN m.perdido = 1 THEN 'Si'
        WHEN m.perdido = 2 THEN 'No'
        ELSE 'Desconocido'
      END AS perdido
      FROM
        Mascotas m
        LEFT JOIN Especies e ON m.id_especie = e.id_especie
        LEFT JOIN Contactos c ON m.id_contacto = c.id_contacto
        LEFT JOIN Ubicaciones u ON c.id_ubicacion = u.id_ubicacion
        LEFT JOIN Localidades l ON u.id_localidad = l.id_localidad
        LEFT JOIN Provincias p ON u.id_provincia = p.id_provincia;
    `;
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getMascotasWithDetails }