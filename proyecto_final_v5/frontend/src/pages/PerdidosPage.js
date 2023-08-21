import React from "react";
import '../styles/components/pages/PerdidosPage.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import MascotaItem from "../components/mascotas/MascotaItem";

const PerdidosPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const getMascotasWithDetails = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/mascotas');
      setMascotas(response.data);
      setLoading(false);
    };

    getMascotasWithDetails();
  }, []);

  console.log(mascotas);

  return (
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-normal">Últimos reportados perdidos</h1>
            <p>
              <a href="/contacto-perdidos" className="btn my-2 text-white fondoVioleta" style={{ backgroundColor: '#1a0a3e' }} >Registrar mascota perdida</a>
            </p>
          </div>
        </div>
      </section>

      <section className="album py-1 container" id="cartelera">
        <div className="container">
          <div className="row row-cols-md-3">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              //Object.keys(mascotas).map(item => console.log(item.titulo))
              //mascotas.map(item => console.log(typeof item))
              mascotas.map(item =>
                <MascotaItem key={item.id}
                  nombre_mascota_item={item.nombre_mascota}
                  imagen={item.imagen} body={item.cuerpo} />)
            )}
          </div>

        </div>
      </section>

    </main>

  );
}

export default PerdidosPage;