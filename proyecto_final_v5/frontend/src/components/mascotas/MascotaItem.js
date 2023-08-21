import React from "react";

const MascotaItem = (props) => {
    const {nombre_mascota, imagen, body} = props;

  return (
        <div className="col mascotas">
          <div className="card shadow-sm bg-dark">
            <img src={imagen} alt={imagen} className="d-block w-100"/>

            <div className="card-body">
              <p className="card-text text-white">
                {nombre_mascota}
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