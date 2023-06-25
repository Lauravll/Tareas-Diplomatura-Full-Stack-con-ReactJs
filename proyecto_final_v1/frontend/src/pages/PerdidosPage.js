import React from "react";
import '../styles/components/pages/PerdidosPage.css';

const PerdidosPage = (props) => {
  return (
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-normal">Últimos reportados perdidos</h1>
            <p>
              <a href="contacto-perdidos.html" className="btn my-2 text-white fondoVioleta" style={{ backgroundColor: '#1a0a3e' }} >Registrar mascota perdida</a>
            </p>
          </div>
        </div>
      </section>

      <section className="album py-1 container" id="cartelera">
        <div className="container">
          <div className="row row-cols-md-3">
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen1.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Dalmi - Se perdió el 24/5 en Temperley a las 16:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="encontrado-perdido.html" className="btn btn-sm btn-outline-secondary">Ver</a>
                    </div>
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen2.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Reina - Se perdió el 20/5 en Burzaco a las 17:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="encontrado-perdido.html" className="btn btn-sm btn-outline-secondary">Ver</a>
                    <small className="text-muted">3:30 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen3.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Rocky - Se perdio el 13/4 en Ezeiza las 12:00 aproximadamente
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="encontrado-perdido.html" className="btn btn-sm btn-outline-secondary">Ver</a>
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen6.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Dalmi - Se perdió el 24/5 en Temperley a las 16:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen4.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Reina - Se perdió el 20/5 en Burzaco a las 17:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                    <small className="text-muted">3:30 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen5.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Rocky - Se perdio el 13/4 en Ezeiza las 12:00 aproximadamente
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

  );
}

export default PerdidosPage;