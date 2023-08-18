var pool = require('./db'); //Llama datos BD
var md5 = require('md5'); 

//Asincronica porque no se en que momento va a entrar el usuario
async function getMascotasWithDetails() {
  try {
    var query = `
      SELECT
        m.id_mascota,
        m.nombre_mascota,
        e.nombre AS especie,
        m.raza,
        m.ojos,
        m.pelaje_color,
        m.pelaje_tipo,
        m.tamanio,
        m.otras_caracteristicas,
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

async function insertMascota(obj) {
  try {
    if (obj.perdido == undefined) {
      obj.perdido = 0;
    }
    const query = "insert into mascotas (nombre_mascota, raza, ojos, pelaje_color, pelaje_tipo, tamanio, perdido, id_especie) values (?, ?, ?, ?, ?, ?, ?, ?)";
    const rows = await pool.query(query, [obj.nombre_mascota, obj.raza, obj.ojos, obj.pelaje_color, obj.pelaje_tipo, obj.tamanio, parseInt(obj.perdido), parseInt(obj.id_especie) ]);
    return rows;

  } catch (error) {
    console.log(error);
    throw error;
  };
};



module.exports = { getMascotasWithDetails, insertMascota }