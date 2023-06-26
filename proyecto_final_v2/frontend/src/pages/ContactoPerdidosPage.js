import React from "react";
import '../styles/components/pages/ContactoPerdidosPage.css';

const ContactoPerdidosPage = (props) => {
  return (
    <main>
      <section className="py-5 container formularioRegistro">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form for="nombre" className="formulario row g-3">
              <h2>Registrar animal perdido</h2>
              <div className="col-md-12">
                <label for="imagenMascota" className="form-label">Selecciona una imagen:</label>
                <input type="file" className="form-control-file" id="imagenMascota" name="image"/>
              </div>
              <div className="col-12">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
              </div>
              <div className="col-12">
                <label for="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" placeholder="Apellido"/>
              </div>
              <div className="col-md-12">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email"/>
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="telefono" placeholder="Telefono"/>
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="direccion" placeholder="Direccion"/>
              </div>
              <div className="col-md-6">
                <label for="ciudad" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="ciudad"/>
              </div>
              <div className="col-md-6">
                <label for="localidad" className="form-label">Localidad</label>
                <input type="text" className="form-control" id="localidad"/>
              </div>
              <div className="col-md-12">
                <label for="caracteristicas">Ingrese Características</label>
                <textarea className="form-control" id="caracteristicas" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary botonRegistrar">Registrar mascota
                  perdida</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    
  );
}

export default ContactoPerdidosPage;