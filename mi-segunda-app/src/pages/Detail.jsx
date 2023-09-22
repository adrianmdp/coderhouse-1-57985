import { useEffect } from "react";
import { useState } from "react";
import Image from "../assets/images/ditto.png";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Detail = () => {
  // Ir a buscar los datos de un pokemon y mostrarlos en pantalla

  const [detail, setDetail] = useState();

  useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto?param1=testParam1&param2=testParam2"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, []);

  console.log(detail);

  if (!detail) return <>Cargando...</>;

  return (
    <Layout id="detail" theme="default" className="page detail">
      <h1>Datos del pókemon</h1>

      <div className="card">
        <div className="card-image">
          <img src={Image} alt="" />
        </div>
        <div className="card-body">
          <h2>Name: {detail.name}</h2>
          <p>Altura: {detail.height}</p>
          <p>Peso: {detail.weight}</p>
          <p>Experiencia base: {detail.base_experience}</p>
        </div>
        <Button>
          <strong>ICONO</strong>
          Comprar
        </Button>
      </div>
    </Layout>
  );
};

export default Detail;
