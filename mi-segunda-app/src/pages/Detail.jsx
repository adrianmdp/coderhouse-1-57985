import { useEffect } from "react";
import { useState } from "react";
import Ditto from "../assets/images/ditto.png";

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
    <>
      <h1>Datos del pókemon</h1>

      <div className="card">
        <div className="card-image">
          <img src={Ditto} alt="" />
        </div>
        <div className="card-body">
          <h2>Name: {detail.name}</h2>
          <p>Altura: {detail.height}</p>
          <p>Peso: {detail.weight}</p>
          <p>Experiencia base: {detail.base_experience}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
