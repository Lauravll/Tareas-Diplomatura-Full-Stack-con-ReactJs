import React from "react";
import '../styles/components/pages/PerdidosPage.css';

const PerdidosPage = (props) => {
  return (
    <main>
      <section class="py-1 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-normal">Últimos reportados perdidos</h1>
            <p>
              <a href="contacto-perdidos.html" class="btn my-2 text-white fondoVioleta" style={{ backgroundColor: '#1a0a3e' }} >Registrar mascota perdida</a>
            </p>
          </div>
        </div>
      </section>

      <section class="album py-1 container" id="cartelera">
        <div class="container">
          <div class="row row-cols-md-3">
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen1.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Dalmi - Se perdió el 24/5 en Temperley a las 16:00
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="encontrado-perdido.html" class="btn btn-sm btn-outline-secondary">Ver</a>
                    </div>
                    <small class="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen2.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Reina - Se perdió el 20/5 en Burzaco a las 17:00
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <a href="encontrado-perdido.html" class="btn btn-sm btn-outline-secondary">Ver</a>
                    <small class="text-muted">3:30 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen3.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Rocky - Se perdio el 13/4 en Ezeiza las 12:00 aproximadamente
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <a href="encontrado-perdido.html" class="btn btn-sm btn-outline-secondary">Ver</a>
                    <small class="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen6.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Dalmi - Se perdió el 24/5 en Temperley a las 16:00
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                    <small class="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen4.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Reina - Se perdió el 20/5 en Burzaco a las 17:00
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                    <small class="text-muted">3:30 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm bg-dark">
                <img src="img/imagen5.png" class="d-block w-100" alt="..." />

                <div class="card-body">
                  <p class="card-text text-white">
                    Rocky - Se perdio el 13/4 en Ezeiza las 12:00 aproximadamente
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                    <small class="text-muted">2 horas</small>
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