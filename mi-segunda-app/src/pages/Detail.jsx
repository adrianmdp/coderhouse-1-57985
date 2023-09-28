import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../assets/images/ditto.png";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Detail = () => {
  // Ir a buscar los datos de un pokemon y mostrarlos en pantalla

  const [detail, setDetail] = useState();

  const { pokemonName } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, [pokemonName]);

  if (!detail) return <>Cargando...</>;

  return (
    <Layout id="detail" theme="default" className="page detail">
      <h1>Datos del pókemon {pokemonName}</h1>

      <Link to="/detail/ditto">Ditto</Link>
      <Link to="/detail/charmander">charmander</Link>
      <Link to="/detail/pikachu">Pikachu</Link>

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
