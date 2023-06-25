import React from "react";
import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props) => {
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img src="img/perro.png" alt="..." class="rounded-circle" width="240" height="240" />
              <h2 class="fw-normal">Perdidos</h2>
              <p>En esta sesión encontrarás todos los animales reportados como perdidos.</p>
              <p><a class="btn btn-secondary" href="perdidos.html">Ver sesión &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img src="img/gato.png" alt="..." class="rounded-circle" width="240" height="240" />
              <h2 class="fw-normal">Novedades</h2>
              <p>En esta sesión encontrarás todas nuestras nuevas novedades.</p>
              <p><a class="btn btn-secondary" href="#">Ver sesión &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img src="img/consejos.png" alt="..." class="rounded-circle" width="240" height="240" />
              <h2 class="fw-normal">Consejos</h2>
              <p>Consejos para seguir ante la perdida de una mascota.</p>
              <p><a class="btn btn-secondary" href="consejos.html">Ver sesión &raquo;</a></p>
            </div>
          </div>
        </div>
      </section>
      <div class="album py-5" id="cartelera">
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
                    <div class="btn-group">
                    </div>
                    <small class="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default NovedadesPage;