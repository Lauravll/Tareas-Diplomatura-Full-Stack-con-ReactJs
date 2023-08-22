import React from "react";

function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('es-ES', options);
}

const MascotaItem = (props) => {
  const { nombre_mascota_item, especie_item, raza_item, ojos, pelaje_tipo, pelaje_color, tamanio, fecha_perdido, provincia, localidad, nombre_contacto, apellido_contacto, telefono, email, imagen, body } = props;

  const fechaFormateada = formatDate(fecha_perdido);

  return (
        <div className="col mascotas">
          <div className="card shadow-sm bg-dark">
            <img src={imagen} alt={imagen} className="d-block w-100"/>

            <div className="card-body">
              <p className="card-text text-white">
            {nombre_mascota_item} es un {especie_item} de raza {raza_item}, sus ojos son {ojos} y su pelaje {pelaje_tipo} y {pelaje_color}.
            <br />
            Es de tamaño {tamanio}.
            Se perdió el dia {fechaFormateada} en {provincia} - {localidad}. 
            <br />
            Si tienes datos contactarse con {nombre_contacto} {apellido_contacto}, teléfono: {telefono}, email: {email}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <a href="/encontrado-perdido" className="btn btn-sm btn-outline-secondary">Ver</a>
                </div>
                <small className="text-muted">2 horas</small>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    )
}

export default MascotaItem;